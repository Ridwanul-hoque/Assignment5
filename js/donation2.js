document.getElementById('btn-feni').addEventListener('click',function(event){
    event.preventDefault()


    const donateAmount = getDonateValueById('text-feni')
    const currentMoney = ValueContainBDT('current-value')
    const donatedAmount = ValueContainBDT('Donate-feni')


    if (!isNaN(donateAmount)&& donateAmount>0 && donateAmount <= currentMoney){
        const newBalance = currentMoney - donateAmount

        document.getElementById('current-value').innerText = newBalance + ' BDT'

        const newDonationAmount = donateAmount + donatedAmount

        document.getElementById('Donate-feni').innerText = newDonationAmount + ' BDT'
    }
    else{
        alert('invalid')
    }

})