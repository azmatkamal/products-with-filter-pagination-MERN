# MERN application for products listing and viewing (Job Test)

## Run application in development mode using:
<br/>
### `npm run dev`
<br/>
<br/>

## Run server only using:
<br/>
### `npm run server`
<br/>
<br/>

## Run client only using:
<br/>
### `npm start --prefix client`
<br/>
<br/>

## BACKEND - NodeJS
<br/>
config -> contains the configuration like internal KEYS
<br/>
models -> contains the model i.e. Products Model
<br/>
routes => contains the API routes
<br/>
<br/>

## FONTEND - ReactJS (Client folder)
<br/>
components -> common components like Main Menu, the Filter section.
<br/>
pages -> contains the pages like Home page (product listing), Product page (single product page)
<br/>
redux -> contains the redux part, actions, reducers, action types
<br/>
<br/>

The Database using MongoDB free cluster, the application is deployed at heroku @ https://job-test-mern.herokuapp.com/
<br/>
<br/>

## Note:
<br/>
The sample data CSV contains the data of more than 512MB in size. The free cluster of MongoDB allows max of 512MB size of data so not whole CSV was imported.
<br/>
