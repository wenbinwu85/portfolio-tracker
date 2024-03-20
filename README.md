a stock portfolio tracker

Backend:
Python3 Quart app with Yahooquery for yahoo finance api.

Frontend:
Angular 17


To run the app
----------------------------------

1. cd to ./src/backend
use the following commands to run the python backend
export QUART_APP=backend_v2:app
quart run --reload

2. run the angular frontend with: npm start

3. app is served at http://localhost:4200/