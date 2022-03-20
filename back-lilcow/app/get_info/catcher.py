from .constants import *

def get_cow_data(num):
    contract = connection.eth.contract(address=contract_address, abi=contract_abi)
    cow = contract.functions.getInfos(num).call()
    return cow

def create_cow(address, minimum, goal, title, shortdesc, longdesc, link):
    contract = connection.eth.contract(address=contract_address, abi=contract_abi)
    return contract.functions.createCowFundMeContract(address, minimum, goal, title, shortdesc, longdesc, link).call()
