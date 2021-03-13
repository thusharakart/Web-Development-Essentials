## django

[DOCUMENTATION](https://docs.djangoproject.com/en/3.1/)

#### installation

    pip3 install django

#### check the version

    django-admin --version

#### create first project

    django-admin startproject <project_name>

#### to run the server

    python3 manage.py runserver

#### to create a app inside the project

    goto the <project_name> folder and run the following

    python3 manage.py startapp <app_name>

#### inside the app create a new file called urls.py
#### inside views.py create the similar function

#### include the url map to the project's urls.py

--------------------------------------------------

#### create a templates folder and which contains all the pages
#### just for now inside the templates folder create home.html 

#### add the templates dir to the dirs in settings.py (inside the project)

--------------------------------------------------

#### create the template base.html