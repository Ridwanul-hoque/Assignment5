document.getElementById('btn-noakhali').addEventListener('click',function(event){
    event.preventDefault()


    const donateAmount = getDonateValueById('text-noakhali')
    const currentMoney = ValueContainBDT('current-value')
    const donatedAmount = ValueContainBDT('Donate-noakhali')


    if (!isNaN(donateAmount)&& donateAmount>0 && donateAmount <= currentMoney){
        const newBalance = currentMoney - donateAmount

        document.getElementById('current-value').innerText = newBalance + ' BDT'

        const newDonationAmount = donateAmount + donatedAmount

        document.getElementById('Donate-noakhali').innerText = newDonationAmount + ' BDT'
    }
    else{
        alert('invalid')
    }

})