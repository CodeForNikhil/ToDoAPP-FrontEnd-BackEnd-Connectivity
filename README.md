# ToDo Application

## Technologies Used

1. **Spring Boot 2.7.17:**
   - [Spring Boot GitHub](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.7-Release-Notes)

2. **Spring Security:**
   - [Spring Security Official Documentation](https://docs.spring.io/spring-security/reference/getting-spring-security.html)

3. **JWT (JSON Web Tokens):**
   - [Introduction to JWT](https://jwt.io/introduction/)
   - [RFC 7519 - JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)

4. **JPA/Hibernate:**
   - [Hibernate Official Documentation](https://docs.jboss.org/hibernate/orm/5.6/userguide/html_single/Hibernate_User_Guide.html)
   - [Java Persistence API (JPA) Specification](https://jakarta.ee/specifications/persistence/2.2/)

5. **H2 Database:**
   - [H2 Database Official Website](https://www.h2database.com/html/main.html)

6. **React:**
   - [React Official Documentation](https://reactjs.org/docs/getting-started.html)
   - [Create React App](https://create-react-app.dev/docs/getting-started/)
  
7. **Nimbus-Jose**
   - [Nimbus JOSE](https://connect2id.com/products/nimbus-jose-jwt)
  
8. **OAUTH Resource Server**
   - [OAuth 2.0 Resource Server](https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html)

## Project Overview

This project is a ToDo application developed using Spring Boot for the backend and React for the front-end. It includes features like adding, deleting, and updating ToDo items. The backend utilizes Spring Security for login authentication with JWT token creation and validation along with OAuth resource server for protecting endpoints by using two forms of OAuth 2.0 Bearer Tokens: a) JWT and b) Opaque Tokens. Data is stored in an H2 database, RESTful APIs facilitate data transfer between the frontend and backend.
P.S. - all code is successfully adapted for the Java 1.8 version.

## Getting Started

To run the application, follow these steps:

1. Clone the repository.
2. Navigate to the `backend` directory and run the Spring Boot application.
3. Navigate to the `frontend` directory and run the React application.

 # React Application Setup

## Prerequisites

Before you start, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm (Node Package Manager)](https://www.npmjs.com/get-npm)

## Installing necessary dependencies for Front-End


```bash
npm install

npm start
```

Feel free to explore the respective documentation links for more details on each technology.
