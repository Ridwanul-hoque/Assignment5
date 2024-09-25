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




        const div = document.createElement('div');
        div.classList.add('bg-white', 'p-4', 'rounded', 'mb-4','border', 'border-white', 'mx-28', 'drop-shadow-md');  
        const currentDate = new Date();

        
        const dates = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Asia/Dhaka',
            timeZoneName: 'long'
        };

        const formattedDate = currentDate.toLocaleString('en-GB', dates);

        div.innerHTML = `
  <h4 class="text-2xl font-bold"> ${donateAmount}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4> 
  <p class="font-light">Date: ${formattedDate} (Bangladesh Standard Time)</p>
`;

        document.getElementById('history-part').appendChild(div);
        my_modal_3.showModal()
    }
    else{
        alert('invalid')
    }

})