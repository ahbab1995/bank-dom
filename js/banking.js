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



    //

    document.getElementById('withdraw-submit').addEventListener('click', ()=>{
        console.log('click you')
    })
 
