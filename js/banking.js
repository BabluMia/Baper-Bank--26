// handle deposit 
document.getElementById('deposit-button').addEventListener('click', function(){
    // deposit 
    let depositInput = document.getElementById('deposit-input');
    let newdepositAmount = depositInput.value;

    // console.log(depositAmount);
    let depositTotal = document.getElementById('deposit-total');
    let previousDepositAmount = depositTotal.innerText; 
    let newDepositTotal =parseFloat(previousDepositAmount)  + parseFloat(newdepositAmount) ;
    depositTotal.innerText = newDepositTotal;

    // update balance
    let balanceTotal = document.getElementById('balance-total');
    let balanceTotalText = balanceTotal.innerText;
    let peviousBalanceTotal = parseFloat(balanceTotalText);
    let newBalanceTotal = peviousBalanceTotal + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;
    // value
    depositInput.value = '';
})