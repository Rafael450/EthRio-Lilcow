from app import create_app
from flask import Flask


app = create_app()

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)