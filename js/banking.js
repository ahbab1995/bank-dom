// handel button Deposit
document.getElementById('deposit-submit').addEventListener('click', ()=>{
    const depositInput = document.getElementById('deposit-amount');
    const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousdepositText = depositTotal.innerText;
    const previousdepositTotal = parseFloat(previousdepositText);
    
    const newdepositTotal = previousdepositTotal + newdepositAmount;
    depositTotal.innerText = newdepositTotal;
    
    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const preBalanceText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(preBalanceText);
    const newBalanceTotal = preBalanceTotal + newdepositAmount;

    balanceTotal.innerText = newBalanceTotal;
  
    depositInput.value = '';

})
    // handle withdraw event handler
    document.getElementById('withdraw-submit').addEventListener('click', ()=>{
        const withdrawInput = document.getElementById('withdraw-amount');
        const withdrawInputText = withdrawInput.value;
        const newWithdrawInput = parseFloat(withdrawInputText);

        // set withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        const preWithdrawText = withdrawTotal.innerText;
        const preWithdrawTotal = parseFloat(preWithdrawText);
        const newWithdrawTotal = preWithdrawTotal + newWithdrawInput;
        withdrawTotal.innerText = newWithdrawTotal;

        // balance update
        const balanceTotal = document.getElementById('balance-total');
        const preBalanceText = balanceTotal.innerText;
        const preBalanceTotal = parseFloat(preBalanceText);
        const newBalanceTotal = preBalanceTotal - newWithdrawTotal
        balanceTotal.innerText = newBalanceTotal;
        withdrawInput.value = '';
    })
 
