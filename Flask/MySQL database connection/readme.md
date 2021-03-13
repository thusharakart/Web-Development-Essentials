Youtube reference
> https://www.youtube.com/watch?v=51F_frStZCQ


To create a database you can use a free hosting service
>  http://www.freemysqlhosting.net/

create a free account and you will recieve an email to the database details
fill the following details accordingly.

app.config['MYSQL_USER'] = 'username'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_HOST'] = 'server'
app.config['MYSQL_DB'] = 'username'

once you create tables and stuf you need to comment them if you are going to run the application again.

To run 
> flask run

To freeze requirements
> pip3 freeze > requirements.txt

To get requirements
> pip3 install -r requirements.txt

