document.getElementById('show-donate').addEventListener('click',function(){
    document.getElementById('show-donate').classList.add('bg-btn-color', 'font-semibold', 'text-xl')
    document.getElementById('show-history').classList.remove('bg-btn-color', 'font-semibold', 'text-xl')
    document.getElementById('donate-part').classList.remove('hidden');

    document.getElementById('history-part').classList.add('hidden')
})
document.getElementById('show-history').addEventListener('click',function(){
    document.getElementById('show-history').classList.add('bg-btn-color', 'font-semibold', 'text-xl')
    document.getElementById('show-donate').classList.remove('bg-btn-color', 'font-semibold', 'text-xl')
    document.getElementById('history-part').classList.remove('hidden');

    document.getElementById('donate-part').classList.add('hidden')
})
// const historyBtn = document.getElementById('show-history')
// historyBtn.addEventListener('click',fucntion(){
//     ('bg-btn-color', 'font-semibold', 'text-xl')
// })





