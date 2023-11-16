import { useNavigate, useParams } from "react-router-dom"
import { createTodo, retrieveSpecificTodoForUserById,updateTodoDetails } from "./ToDo-API/ToDoApiService"
import { useAuth } from "./AuthorizationContext"
import { useEffect, useState } from "react"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import moment from 'moment'

export default function ToDoComponent(){
    const {id} = useParams()

    const authContext = useAuth()

    const username = authContext.username

    const [description, setDescription] = useState('')

    const [targetDate, setTargetDate] = useState('')

    const navigate = useNavigate()

    useEffect(
        () => retrieveTodos(), 
        [id]
    )

    function retrieveTodos(){
        if(id!=-1){

            retrieveSpecificTodoForUserById(username, id)
            .then((response) => {
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            }
            )
            .catch((error) =>console.log(error))
        }
    }

    function onsubmit(values){
        console.log(values)
        const todo = {
            id:id ,
            username:username,
            description : values.description,
            targetDate: values.targetDate,
            done:false
        }

        if(id==-1){
            createTodo(username, todo)
            .then(
                response => console.log(response),
                navigate("/todos")
            
            )
            .catch((error) =>console.log(error))

        }else{

            updateTodoDetails(username, id, todo)
            .then(
                response => console.log(response),
                navigate("/todos")
                
                )
                .catch((error) =>console.log(error))
            }
    }

    function validate(values){
        let errors={
            // description: "enter a valid description",
            // targetDate: "Enter a valid date"
        }

        if(values.description.length < 5){
            errors.description = "Enter atleast 5 characters"
        }
        if (values.targetDate == null || values.targetDate == '' || !moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a targetDate";
        } 
        else {
            let currentDate = new Date();
            let targetDate = new Date(values.targetDate);
        
            if (targetDate < currentDate) {
                errors.targetDate = "Target date cannot be in the past";
            }
        }
        console.log(values)
        return errors
    }

    return (
        <div className="container">
            <h1>
                Enter To Do details
            </h1>
            <div>
               <Formik initialValues={ {description, targetDate}}
               enableReinitialize={true}
               onSubmit={onsubmit}
               validate={validate}
               validateOnChange={false}
               validateOnBlur={false}
               >
                    {
                        (props)=>(
                            <Form>
                            <ErrorMessage 
                            name="description"
                            component="div"
                            className="alert alert-warning"
                            />

                            <ErrorMessage 
                            name="targetDate"
                            component="div"
                            className="alert alert-warning"
                            />

                            <fieldset className="form-group">
                                <label>Description:</label>
                                <Field type="text" className="form-control" name="description"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date:</label>
                                <Field type="date" className="form-control" name="targetDate"></Field>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>

                            </Form>
                        )
                    }
               </Formik>
            </div>
        </div>
    )
}