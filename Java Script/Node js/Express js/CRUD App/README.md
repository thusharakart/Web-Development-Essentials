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
-g for install it globally.

> sudo npm install -g nodemon --save-dev

So, everytime when start the project with nodeman, it should run app.js
Change the following in index.js to achieve that.

> "scripts": {
    "start": "nodemon app.js"
  }

Also, to use PATCH / PUT, DELETE install postman 

> sudo snap install postman

To install mongodb server if you don't have installed it.

> sudo apt-get install mongodb
> sudo apt install mongodb-server-core
> sudo apt install mongodb-clients

Check for mongodb

> mongod

To check the mongodb version

> mongod --version

To open mongodb shell

> mongo

To use the database enter the following command in mongodb shell

> use databasename 

Here it is 'use ExpressCRUDdb'
In the case, there is no database with the given name it will automatically create a new one.

********************************EXTRA***************************************
To stop MongoDB:

> sudo systemctl stop mongodb

To start MongoDB:

> sudo systemctl start mongodb

To restart MongoDB when it’s already running (for example, to apply configuration changes):

> sudo systemctl restart mongodb

To prevent MongoDB from launching at boot:

> sudo systemctl disable mongodb

To set MongoDB to launch at boot:

> sudo systemctl enable mongodB

****************************************************************************

Then create the app.js code 

To run the app.js

> nodemon run start

Create routers which will accept the requests from clients.







