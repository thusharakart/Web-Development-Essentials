Setup for windows

1. open cmd
2. > psql -U postgres (for ubuntu : psql -U postgres -h localhost -W) 
3. enter passward (To change the password in ubuntu : sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'new_password';")
4. To view the list of databases 
    > \l
5. To create a database
    > CREATE DATABASE databasename;
6. To check list of roles
    > \du
7. To connect to the database
    > \c databasename
8. To check the table description
    > \d tablename
9. To grant all privileges
    > GRANT ALL PRIVILEGES ON DATABASE "databasename" To username;
