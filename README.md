# EverQuote
*By Cole Hunter - [Visit EverQuote](https://everquote-flashcards.herokuapp.com/)*

**Table of Contents**
* [EverQuote at a Glance](#everquote-at-a-glance)
* [Application Architecture & Technologies Used](#application-architecture) 
* [Frontend Overview](#frontend-overview)
* [Backend Overview](#backend-overview)
* [Conclusion](#conclusion-and-next-steps)

## EverQuote at a Glance
EverQuote is a fullstack app for writing and generating notes, inspired by evernote.com. Users can create notebooks to store notes, which are facilitated with a rich text editor.

##### Studying Flashcards
![EverQuote gameplay](/readme-resources/everquote-demo.gif)

## Application Architecture
The majority of the application logic occurs within front end's [Redux](https://redux.js.org/) store. EverQuote uses plain CSS for styling components. 
The backend serves the frontend, responds to frontend requests, and fetches data from the PostgreSQL database.

## Frontend Overview
EverQuote is very frontend heavy application. Below are the frontend technologies that make this application possible. 

### Frontend Technologies Used:
#### React
At its core, EverQuote is a React application.

```jsx

```

#### Redux
[Redux](https://redux.js.org/) and the [react-redux](https://react-redux.js.org/) library were used to manage application state and make fetch requests to the server for data. 

All notebook information is fetched on page load and kept in the Redux store. While this expensive operation lengthens the initial load time, it also allows for a snappy experience after that load.

Redux also allows for a lot of extendibility if new features are to be implemented.

#### CSS
EverQuote uses pure CSS for styling.

## Backend Overview
EverQuote uses an Express server with PostgreSQL as the database. Compared to the frontend, the backend of EverQuote is fairly simple, with the server sending the front end to the client, receiving requests, and sending data to the frontend. Below are the backend technologies used with some notes regarding their implementation. 

### Backend Technologies Used
#### ExpressJS
[Express](https://expressjs.com/) was the natural choice for EverQuote's server-side framework. The minimalism of Express lent itself to the very light-weight responsibilities of EverQuote's server. The server is just a couple of routes and a connection to the database, with a few utilities to facilitate this. 

#### PostgreSQL
My system for database management.

#### SQLAlchemy, for using Python SQL
#### Alembic, for database migrations
#### Flask, for handling web server calls
#### Flask-Login, for user session management with Flask
#### Flask-CORS, for handling Cross Origin Resource Sharing
#### Flask-WTF, for integrating Flask and WTForms
#### Flask-Migrate, for handling Alembic database migrations
#### Gunicorn, a WSGI to run my Python applications
#### Werkzeug, to hash passwords and perform type conversions
#### WTForms, for form validations

## Conclusion
Developing EverQuote challenged me to use the foundational skills I've aquired to create a simple, yet effective React application.
