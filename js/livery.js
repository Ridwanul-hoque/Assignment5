function getDonateValueById(id){
    const donateValue = document.getElementById(id).value
    const donateNumber= parseFloat(donateValue)
    console.log(donateNumber)
    return donateNumber
}
function ValueContainBDT(id){
    const extractNumber = document.getElementById(id).innerText
    console.log(extractNumber)
    const currentValue = parseFloat(extractNumber.replace(' BDT',''))
    console.log(currentValue)
    const newNumber =parseFloat(currentValue)
    console.log(newNumber)
    return newNumber 

}

