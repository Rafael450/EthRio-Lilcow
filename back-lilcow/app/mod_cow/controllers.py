from flask import Blueprint, request
from app.get_info.catcher import *
import json, jsonify

mod_cow = Blueprint('cows', __name__, url_prefix='/cows')

@mod_cow.route('/get_cow', methods=['GET'])
def get_all_cows():
    cow = request.get_json()['cow']
    print(cow)
    try:
        data = get_cow_data(cow)
    except:
        return json.dumps({'status':500,'message':'Ocorreu um erro na obtenção dos dados.'}),500
    
    return json.dumps({'data':data,'status':200}),200

@mod_cow.route('/create_cow', methods=['GET'])
def create_cow():
    try:
        address = request.get_json()['address']
    except:
        return json.dumps({'status':500,'message':"Don't forget to add the address."}),417
        
    try:
        minimum = request.get_json()['minimum']
    except:
        return json.dumps({'status':417,'message':"Don't forget to add the minimum donation value."}),417
        
    try:
        goal = request.get_json()['goal']
    except:
        return json.dumps({'status':417,'message':"Don't forget to add the goal value."}),417
        
    try:
        title = request.get_json()['title']
    except:
        return json.dumps({'status':417,'message':"Don't forget to add the title."}),417
        
    try:
        short = request.get_json()['short']
    except:
        return json.dumps({'status':417,'message':"Don't forget to add the short description."}),417
        
    try:
        long = request.get_json()['long']
    except:
        return json.dumps({'status':417,'message':"Don't forget to add the long description."}),417
        
    try:
        link = request.get_json()['link']
    except:
        link = ""
        
    
    try:
        data = create_cow(address, minimum, goal, title, short, long, link)
    except:
        return json.dumps({'status':500,'message':'Ocorreu um erro na criação da vaca.'}),500
    return data