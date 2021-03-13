youtube reference: https://www.youtube.com/watch?v=Z1RJmh_OqeA

Install python and pip

Then use virtual envirement
> pip3 install virtualenv
> virtualenv env  {env is the envirement name}
> source env/bin/activate

Then install required packages
> pip3 install flask flask-sqlalchemy

Then create the file for the app
here it is app.py


To create the database according to the model 
created inside the app we can just use the folowing commmands
in a python shell
> python3
    >> from app import db
    >> db.create_all()


To install gunicorn
> pip3 install gunicorn

To create a text file to all requirement
> pip3 freeze > requirements.txt

(if you dont have installed requirements and you have the requirements.txt)To download the requirement using requirements.txt
> pip install -r requirements.txt

To add to github
> git init
> git add .
> git commit -m "Init app"

To login to heroku
> heroku login

To create the heroku app
> heroku create flaskcrudapp {flaskcrudapp is the application name}

To make application working
> touch Procfile {this is the file that we tell heroku what to do with all these files}
And inside the Procfile just add the following line
> web: gunicorn app:app

To push to git
> git remote -v {check where we are pushing to}
> git push heroku master





