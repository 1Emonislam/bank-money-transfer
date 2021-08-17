
function getNewInputField(newAmounts){
    //get new input value
    const newInputField = document.getElementById(newAmounts);
    const newInputFieldAmount = parseFloat(newInputField.value);
    //reset input field
    newInputField.value = '';
    return newInputFieldAmount;
}
function getPerviousInputField(perviousAmount,newAmounts){
    const perviousField = document.getElementById(perviousAmount);
    const perviousAmounts = parseFloat(perviousField.innerText);
    const totalAmounts = perviousAmounts + newAmounts;
    perviousField.innerText = totalAmounts; 
}
function getMyBlanceUpdate(newAmounts,isAdd){
    const myBlance = document.getElementById('my-blance');
    const myPerviousBlance = parseFloat(myBlance.innerText);
   if(isAdd == true){
    const totalBlance = myPerviousBlance + newAmounts;
    myBlance.innerText = totalBlance;
   }else{
    const totalBlance = myPerviousBlance - newAmounts;
    myBlance.innerText = totalBlance;
   }
}
function myBlanceChecking(){
    const myBlance = document.getElementById('my-blance');
    const myBlanceCheck = parseFloat(myBlance.innerText);
    return myBlanceCheck;
}
document.getElementById('deposit-button').addEventListener('click',function (){
   const newDepositAmounts = getNewInputField('new-deposit-amounts');
   if(newDepositAmounts > 0){
    getPerviousInputField('pervious-deposit-blance',newDepositAmounts);
    getMyBlanceUpdate(newDepositAmounts,true);
   }
});
document.getElementById('withdraw-button').addEventListener('click',function(){
   const newWithdrawAmounts = getNewInputField('new-withdraw-amounts');
   const myBlance = myBlanceChecking();
   if(newWithdrawAmounts > 0 && newWithdrawAmounts < myBlance){
    getPerviousInputField('pervious-withdraw-blance',newWithdrawAmounts);
    getMyBlanceUpdate(newWithdrawAmounts,false)
   }
});
