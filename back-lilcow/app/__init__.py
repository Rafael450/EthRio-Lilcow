from flask import Flask

def create_app():
    app = Flask(__name__, instance_relative_config=False)
    
    with app.app_context():
        from app.mod_cow.controllers import mod_cow
        from app.load_pages.loader import pgloader
        
        app.register_blueprint(mod_cow)
        app.register_blueprint(pgloader)
        return app
    
    
    
    