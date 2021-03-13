from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# setup the application
app = Flask(__name__)
# tell the app where his database is located
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'

# initiate the database
db = SQLAlchemy(app)

# create a model
class Todo(db.Model):
    # create the required columns
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    # create a function to return a string when created a new element
    def __rept__(self):
        return '<Task %r>' %self.id

# create a index route
@app.route('/', methods=['POST', 'GET'])

# create the function for that route
def index():

    if request.method == "POST":
        task_content =  request.form['content']
        newtask = Todo(content = task_content)

        try:
            db.session.add(newtask)
            db.session.commit()
            # redirect back to index page
            return redirect('/')
        except :
            return "There was an issue adding your task"
    else:
        # go through the database and search the tasks created by the date created
        # and get them all, (also can use first to get the first task instead)
        tasks = Todo.query.order_by(Todo.date_created).all()
        return render_template('index.html', tasks = tasks)


@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = Todo.query.get_or_404(id)

    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except :
        return "There was a problem deleting the given task."

@app.route('/update/<int:id>', methods=['POST', 'GET'])
def update(id):
    task_to_update = Todo.query.get_or_404(id)
    if request.method == "POST":
        task_to_update.content = request.form['content']
        try:
            db.session.commit()
            return redirect('/')
        except :
            return "There was a problem updating the given task."
    else:
        return render_template('update.html', task = task_to_update)


if __name__ == "__main__":
    app.run(debug=True)
