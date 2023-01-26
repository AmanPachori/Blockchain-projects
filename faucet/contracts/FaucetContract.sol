// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Faucet {

 uint public numOfFunders;
 mapping(uint => address) public funders ;

 receive() external payable{}

 function addFunds() external payable{
   uint index = numOfFunders++;
   funders[index] = msg.sender;

 }

 function getAll() external view returns(address[] memory)
 {
   address[] memory _funders = new address[](numOfFunders);

   for(uint i = 0; i < numOfFunders; i++)
   {
    _funders[i] = funders[i];
   }

   return _funders;

 } 

 function getFunderAtIndex(uint8 index) external view returns(address)
 {
   return funders[index];
 } 
 
 modifier limitWithdraw(uint withdrawAmount)
 {
  require(
    withdrawAmount < 100000000000000000,
    "cannot withdraw more than 0.1 ether"
    );
    _;
 }

function withdraw(uint withdrawAmount) external limitWithdraw(withdrawAmount){
      payable(msg.sender).transfer(withdrawAmount);
  }

} 




// const instance = await Faucet.deployed();
// instance.addFunds();
// instance.addFunds({from : accounts[0],value :"2000000000000000000"});
// instance.addFunds({from : accounts[1],value :"2000000000000000000"});
// instance.withdraw("500000000000000000",{from:accounts[1]})
// instance.getFunderAtIndex(0)
// 