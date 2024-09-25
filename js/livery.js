function getDonateValueById(id){
    const donateValue = document.getElementById(id).value
    const donateNumber= parseFloat(donateValue)
    console.log(donateNumber)
    return donateNumber
}
function ValueContainBDT(id){
    const extractNumber = document.getElementById(id).innerText
    const currentValue = parseFloat(extractNumber.replace(' BDT',''))
    const newNumber =parseFloat(currentValue)
    return newNumber 

}