// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";    // USD-ETH

contract CowFundMe {
    mapping(address => uint256) public addressToAmountFunded;   //Quanto a carteira x doou
    address[] public funders;                                   //Array com o endereço dos doadores
    address owner;                                              //Dono desta vaquinha
    address cowAddress;                                         //Endereço desta vaquinha
    uint256 cowID;                                              //ID da vaquinha (numero da vaquinha em ordem de criação: 0, 1, 2, 3, ...)
    uint256 minimumUSD;                                         //Minimo de doação em dollars
    uint256 metaUSD;                                            //Meta de doações em dollars
    uint256 startTime;                                          //Tempo inicial da vaquinha
    uint256 maxTime;                                            //Tempo máximo de duração da vaquinha
    int256 public timer;                                        //Contagem regressiva do timer
    uint256 totalAmountFunded;                                  //Total doado
    string title;                                               //Titulo da vaquinha
    string name;                                                //Descrição curta da vaquinha
    string longDescription;                                     //Descrição longa da vaquinha
    string link;                                                //Link associado à vaquinha (opcional)
    bool open;                                                  //Status da vaquinha

    //Salvar todas as informações relevantes da vaquinha na blockchain!
    constructor(address _owner, uint256 lastID, uint256 _minimumUSD, uint256 _metaUSD, uint256 _maxTime, string memory _title, string memory _name, string memory _longDescription, string memory _link) {
        cowAddress = address(this);
        owner = _owner;
        cowID = lastID;
        minimumUSD = _minimumUSD;
        metaUSD = _metaUSD;
        startTime = block.timestamp;
        maxTime = _maxTime;
        timer = int256(_maxTime);
        title = _title;
        name = _name;
        longDescription = _longDescription;
        link = _link;
        open = true;
    }

    modifier onlyOpen {
        require(open == true);
        _;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    //financiamento da vaquinha
    function fund() public onlyOpen payable {
        require(getConversionRate(msg.value) >= minimumUSD, "You need to be CowFunder, not CowHand! Donate more than the minimum amount.");
        attTimer();
        require(timer >= 0, "Time is Over for this CowFund!");
        addressToAmountFunded[msg.sender] += msg.value;
        totalAmountFunded += msg.value;
        funders.push(msg.sender);
    }

    //sacar o dinheiro final da vaquinha
    function withdraw() public onlyOwner payable {
        attTimer();
        require(timer < 0);
        payable(msg.sender).transfer(address(this).balance);
        open = false;
    }

    //obter preço, em dollars, de 1 ETH
    function getPrice() public view returns(uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
        (,int256 answer,,,) = priceFeed.latestRoundData();
        return uint256(answer * 10 ** 10);
    }

    //converter em dolar
    function getConversionRate(uint256 ethAmount) public view returns (uint256) {       //ethAmount é em wei; ethPrice é em wei
        uint256 ethPrice = getPrice();
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / (10 ** 18);
        return ethAmountInUsd;      //Retorna, na realidade, o: (valor em USD) * 10 ** 18
    }

    //atualizar o timer
    function attTimer() public returns(int256) {
        timer = int256(maxTime) + int256(startTime) - int256(block.timestamp);
        return timer;
    }

    function cowStatus() public view returns(bool) {
        return open;
    }

    /*retornar as informações estáticas desta vaquinha*/

    function _Addresses() public view returns(address, address) {
        return(cowAddress, owner);
    }
    function _Numbers() public view returns(uint256, uint256) {
        return(cowID, metaUSD);
    }
    function _Strings() public view returns(string memory, string memory, string memory, string memory) {
        return(title, name, longDescription, link);
    }
    function _Bools() public view returns(bool) {
        return open;
    }
}