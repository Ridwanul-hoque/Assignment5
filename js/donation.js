document.getElementById('btn-noakhali').addEventListener('click', function (event) {
    event.preventDefault()


    const donateAmount = getDonateValueById('text-noakhali')
    const currentMoney = ValueContainBDT('current-value')
    const donatedAmount = ValueContainBDT('Donate-noakhali')


    if (!isNaN(donateAmount) && donateAmount > 0 && donateAmount <= currentMoney) {
        const newBalance = currentMoney - donateAmount

        document.getElementById('current-value').innerText = newBalance + ' BDT'

        const newDonationAmount = donateAmount + donatedAmount

        document.getElementById('Donate-noakhali').innerText = newDonationAmount + ' BDT'




        // const p =document.createElement('p')
        // p.innerText = `${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh`
        // document.getElementById('history-part').appendChild(p)



        // const div = document.createElement('div');
        // div.classList.add('bg-white', 'p-4', 'rounded', 'mb-4'); // Styling the history entry
        // div.innerHTML = `
        //   <h4 class="text-2xl font-bold mx-28"> ${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh </h4> 
        //   <p class="mx-28 font-light">Date: ${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' })}</p>
        // `;

        
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
  <h4 class="text-2xl font-bold"> ${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh </h4> 
  <p class="font-light">Date: ${formattedDate} (Bangladesh Standard Time)</p>
`;

        document.getElementById('history-part').appendChild(div);

        my_modal_1.showModal()

    }
    else {
        alert('invalid')
        
    }

})