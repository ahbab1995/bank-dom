// handel button Deposit

document.getElementById('deposit-submit').addEventListener('click', ()=>{
    const depositInput = document.getElementById('deposit-amount');
    const depositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;

    depositInput.value = '';
})