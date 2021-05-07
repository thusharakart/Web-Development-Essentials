### This is a basic crud app using express and mongodb

Open the terminal(Ubuntu)

> npm init

Use the defalut settings

Here changed the entry point to app.js instead of index.js

Then it will automatically create the package.json file.

Install express

> npm install express

Install mongodb

> npm install mongodb

Also, install mongoose

> npm install mongoose

For the development perposes install nodemon
So that we can automatically restart the server while developing.
But as we don't want this to be in package.json we can explisitly say that.
By default it is --save-prod for production envirement but here we need it to 
--save-dev for developer envirement.

> npm install nodemon --save-dev

So, everytime when start the project with nodeman, it should run app.js
Change the following in index.js to achieve that.

> "scripts": {
    "start": "nodemon app.js"
  }

Also, to use PATCH / PUT, DELETE install postman 

> sudo snap install postman

To install mongodb server if you don't have installed it.

> sudo apt install mongodb-server-core







