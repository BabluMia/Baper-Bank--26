// handle deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    // deposit 
    let depositInput = document.getElementById('deposit-input');
    let newdepositAmount = depositInput.value;

    // console.log(depositAmount);
    let depositTotal = document.getElementById('deposit-total');
    let previousDepositAmount = depositTotal.innerText;
    let newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newdepositAmount);
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
document.getElementById('withdrow-button').addEventListener('click', function () {
    let withdrowInput = document.getElementById('withdrow-input');
    let withdrowAmountText = withdrowInput.value;
    let newWithdrowAmount = parseFloat(withdrowAmountText)
    // console.log(newWithdrowAmount)
    //set withdrow total
    let withdrowTotal  =document.getElementById('withdrow-total');
    let previousWithdrowText = withdrowTotal.innerText;
    let previousWithdrowTotal = parseFloat(previousWithdrowText);
    let newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowTotal.innerText = newWithdrowTotal;
    // update balance
    let balanceTotal = document.getElementById('balance-total');
    let peviousBalanceText = balanceTotal.innerText;
    let peviousBalanceTotal = parseFloat(peviousBalanceText);
    let newBalanceTotal = peviousBalanceTotal - newWithdrowAmount;
    balanceTotal.innerText = newBalanceTotal;



    // clear
    withdrowInput.value = '';
})