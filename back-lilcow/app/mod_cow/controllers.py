from flask import Blueprint
from app.get_info.catcher import get_all_data
import json

mod_cow = Blueprint('cows', __name__, url_prefix='/cows')

@mod_cow.route('/get_all_cows', methods=['GET'])
def get_all_cows():
    try:
        data = get_all_data()
    except:
        return json.dumps({'status':500,'message':'Ocorreu na obtenção dos dados.'}),500
    
    return data

@mod_cow.route('/create_cow', methods=['GET'])
def create_cow():
    try:
        data = get_all_data()
    except:
        return json.dumps({'status':500,'message':'Ocorreu na obtenção dos dados.'}),500
    return data