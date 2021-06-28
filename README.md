# azmatkamal-product-with-filter-pagination-MERN

run application in development mode using:
npm run dev
<br/>

run server only using:
npm run server
<br/>

run client only using:
npm start --prefix client
<br/>

BACKEND - NodeJS
config -> contains the configuration like internal KEYS
models -> contains the model i.e. Products Model
routes => contains the API routes
<br/>

FONTEND - ReactJS (Client folder)
components -> common components like Main Menu, the Filter section.
pages -> contains the pages like Home page (product listing), Product page (single product page)
redux -> contains the redux part, actions, reducers, action types
<br/>

The Database using MongoDB free cluster, the application is deployed at heroku @ https://job-test-mern.herokuapp.com/
<br/>

<br/>
Note: The sample data CSV contains the data of more than 512MB in size. The free cluster of MongoDB allows max of 512MB size of data so not whole CSV was imported.
