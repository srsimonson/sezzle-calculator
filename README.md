# Welcome!

## Setup

To run this application on your machine:

[] Create a database with the instructions in the `database.sql` file.

[] Install dependencies with `npm install` to add all. Otherwise, they are individually listed below.
- npm install mathjs
- npm install axios
- npm install express
- npm install body-parser
- npm install pg

[] Start commands to fire up the server is `npm start`, or
- npm run client
- npm run server

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Calculator Exercise details:

Create a web app using any language which logs calculations as they happen and shares those calculations with everyone connected to the app.

For example, user A and user B go to your app at the same time. User A calculates “5 + 5”, which equals “10". This is logged below the calculator as “5 + 5 = 10”. User B is updated about this calculation right after user A posts it. Now, user B calculates “3 x 4".This calculates to “12” and displays “3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest. The calculator only needs to implement basic arithmetic operations, although you can add other math functions if you would like to impress. But don't forget to meet the basic requirements of the exercise first!

The app must be hosted and deployed to be publicly accessible to engineers at Sezzle so that we can grade the project. The deliverables include both the deployed application and the source code hosted at a site like Github. 