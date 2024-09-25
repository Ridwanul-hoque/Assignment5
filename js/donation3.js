document.getElementById('btn-quota').addEventListener('click',function(event){
    event.preventDefault()


    const donateAmount = getDonateValueById('text-quota')
    const currentMoney = ValueContainBDT('current-value')
    const donatedAmount = ValueContainBDT('Donate-quota')


    if (!isNaN(donateAmount)&& donateAmount>0 && donateAmount <= currentMoney){
        const newBalance = currentMoney - donateAmount

        document.getElementById('current-value').innerText = newBalance + ' BDT'

        const newDonationAmount = donateAmount + donatedAmount

        document.getElementById('Donate-quota').innerText = newDonationAmount + ' BDT'
    }
    else{
        alert('invalid')
    }

})