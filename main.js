const elForm = document.querySelector(".js-form")
const elInput = elForm.querySelector(".js-input")
const elInputDatalist = elForm.querySelector(".js-input-datalist")
const elInputPhone = elForm.querySelector(".js-input-phone")
const elBtn = elForm.querySelector(".js-btn")
const elContactList = document.querySelector(".contact-list")


const newArr = [];

function add (){
    for (const arr of newArr) {
        
        const newItem = document.createElement("li")
        const newName = document.createElement("h3")
        const newData = document.createElement("p")
        const newNumber = document.createElement("a")
        
        newName.textContent = arr.userName
        newData.textContent = arr.dataList
        newNumber.textContent = arr.userNumber
        newNumber.href = `${"tel:" + arr.userNumber}`
        
        newItem.append(newName , newData , newNumber)
        elContactList.appendChild(newItem)
        
        newItem.classList.add("contac-item")
        newNumber.classList.add("contact-number")
        
        
    }
    
}

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    elContactList.textContent = ""
    
    const elInputValue = elInput.value.trim()
    const elInputDatalistValue = elInputDatalist.value.trim()
    const elInputPhoneValue = elInputPhone.value.trim()
    
    const obj = {
        userName: elInputValue,
        dataList: elInputDatalistValue,
        userNumber: elInputPhoneValue,
    }
    
    newArr.push(obj)
    
    add()
    
})

