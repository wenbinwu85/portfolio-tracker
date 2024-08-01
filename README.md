a cool stock portfolio tracker

Backend:
Python3 Quart app with Yahooquery for yahoo finance api.
backend is hosted on render.com:
https://portfolio-tracker-backend-5ys2.onrender.com/

Frontend: Angular 18
frontend is hosted on firebase:
https://big-fart.web.app

To use the portfolio tracker
----------------------------------
1. supply a csv file with your portfolio holding info
2. the csv should have 3 columns,
ticker | number of shares | cost average of each share

example:
AAPL,100,123.45
MSFT,50,456.78

To run the frontend locally
----------------------------------

1. run the angular frontend with

```
npm start
```
2. app is served at http://localhost:4200/