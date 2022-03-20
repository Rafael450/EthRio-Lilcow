from flask import Flask, render_template, Blueprint

pgloader = Blueprint('loader', __name__)

@pgloader.route('/')
def home():
    return render_template('home.html')