// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import "./CowFundMe.sol";

//Esse Smart Contract serve para gerar novas vaquinhas na BlockChain.
contract CowFundFactory {
    CowFundMe[] public cowArray;        //Endereço de todas as vaquinhas
    uint256 lastID;

    //Gerador de "CowFundMe"
    function createCowFundMeContract(address _owner, uint256 _minimumUSD, uint256 _metaUSD, uint256 _maxTime, string memory _title, string memory _name, string memory _longDescription, string memory _link) public returns(CowFundMe) {
        lastID += 1;
        CowFundMe cowfundme = new CowFundMe(_owner, lastID, _minimumUSD, _metaUSD, _maxTime, _title, _name, _longDescription, _link);
        cowArray.push(cowfundme);
        return cowfundme;
    }

    //retornar valores importantes para a vaquinha

    function Addresses(uint256 cowID) public view returns(address, address) {
        return cowArray[cowID - 1]._Addresses();
    }
    function Numbers(uint256 cowID) public view returns(uint256, uint256) {
        return cowArray[cowID - 1]._Numbers();
    }
    function Strings(uint256 cowID) public view returns(string memory, string memory, string memory, string memory) {
        return cowArray[cowID - 1]._Strings();
    }
    function getlastID() public view returns(uint256) {
        return lastID;
    }
    function Bools(uint256 cowID) public view returns(bool) {
        return cowArray[cowID - 1]._Bools();
    }
}