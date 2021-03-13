from flask import Flask, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

# db and the username are the same
app.config['MYSQL_USER'] = 'sql6398552'
app.config['MYSQL_PASSWORD'] = 'dXy6M9yQME'
app.config['MYSQL_HOST'] = 'sql6.freemysqlhosting.net'
app.config['MYSQL_DB'] = 'sql6398552'
# way that data get returns to you. Nomally as tuples but Dictionary is fine
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/')
def index():
    cur = mysql.connection.cursor()

    '''following code need to be run only a once to create database tables'''
    # cur.execute('''CREATE TABLE example (id INTEGER, name VARCHAR(20))''')
    # cur.execute('''INSERT INTO example VALUES (1, 'Rusiru')''')
    # cur.execute('''INSERT INTO example VALUES (2, 'Thushara')''')
    # # # After inserting updating or deleting data we need to commit
    # mysql.connection.commit()

    # To fetch the data from the database
    cur.execute('''SELECT * FROM example''')
    result = cur.fetchall()

    return render_template('index.html', results = result)
