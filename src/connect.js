import * as constants from "./const"
import { ethers } from "ethers";

export const connectWallet = async () => {
    if (window.ethereum) { //check if Metamask is installed
          try {
              const address = await window.ethereum.enable(); //connect Metamask
              const obj = {
                      connectedStatus: true,
                      status: "",
                      address: address
                  }
                  return obj;
               
          } catch (error) {
              return {
                  connectedStatus: false,
                  status: "🦊 Connect to Metamask using the button on the top right."
              }
          }
          
    } else {
          return {
              connectedStatus: false,
              status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
          }
        } 
  };

export const getSize = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(constants.address, constants.abimain, signer);

    let size = contract.getlastID();

    return size;
     
  };

  export const getCow = async (num) => {
    connectWallet();
    
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();

        const contract = new ethers.Contract(constants.address, constants.abimain, signer);

        const cow = await contract.Strings(num);
        return cow;

    } catch (error) {
        return false
                    };
    



    
     
  };

export const createCow = async (owner, minimum, goal, time, title, name, desc, link) => {

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();

        const contract = new ethers.Contract(constants.address, constants.abimain, signer);

        contract.createCowFundMeContract(owner, minimum, goal, time, title, name, desc, link);

        return 200;
         
    } catch (error) {
        console.log(error);
        return {
            error: error
        };
    }
  };