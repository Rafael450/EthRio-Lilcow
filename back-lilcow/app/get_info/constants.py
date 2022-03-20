from web3 import Web3
import web3

node_prov = "https://rinkeby.infura.io/v3/61f6343e1a414ababc7cfb9b55b861a7"
connection = Web3(Web3.HTTPProvider(node_prov))
contract_address = "0x08435F4d844DD6D07c0aa74538d6928c7C51E7B3"
contract_abi = """
[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cowArray",
		"outputs": [
			{
				"internalType": "contract CowFundMe",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_minimumUSD",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_metaUSD",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_shortdescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_longdescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_link",
				"type": "string"
			}
		],
		"name": "createCowFundMeContract",
		"outputs": [
			{
				"internalType": "contract CowFundMe",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "cowID",
				"type": "uint256"
			}
		],
		"name": "getInfos",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
"""