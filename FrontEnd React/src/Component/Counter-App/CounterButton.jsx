
export default function CounterButton({by, incrementMethod, decrementMethod}){

    
    // function incrementCounterFunction(){
    //     incrementMethod(by)
    // }

    // function decrementCounterFunction() {
    //     decrementMethod(by)
    // }
    return (
        <div className="Counter">
            <div>
                <button className="CounterButton"
                // onClick={incrementCounterFunction}
                // OR create a lambda to avoid the function creation.
                onClick={()=>incrementMethod(by)}
                >+{by}</button>
                <button className="CounterButton"
                // onClick={decrementCounterFunction}
                  // OR create a lambda to avoid the function creation.
                  onClick={()=>decrementMethod(by)}
                >-{by}</button>
            </div>
        </div>
    )
}