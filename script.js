
function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let phoneNumInput = document.getElementById('phone').value
    let batchNumInput = document.getElementById('batch-number').value
    let currModuleInput = document.getElementById('curr-module').value
    let tncInput = document.getElementById('tnC').checked


    let firstNameValid = document.getElementById('first-name-valid')
    let firstNameInvalid = document.getElementById('first-name-invalid')
    let lastNameValid = document.getElementById('last-name-valid')
    let lastNameInvalid = document.getElementById('last-name-invalid')
    let emailValid = document.getElementById('email-valid')
    let emailInvalid = document.getElementById('email-invalid')
    let phoneValid = document.getElementById('phone-valid')
    let phoneInvalid = document.getElementById('phone-invalid')
    let batchNumValid = document.getElementById('batch-valid')
    let batchNumInvalid = document.getElementById('batch-invalid')
    let currModuleValid = document.getElementById('curr-module-valid')
    let currModuleInvalid = document.getElementById('curr-module-invalid')
    let tnCInvalid = document.getElementById('tnC-invalid')

    let error = false;

    if(firstNameInput.length >= 3){

        firstNameValid.style.display = 'block'
        firstNameInvalid.style.display = 'none'
    }else{
        firstNameInvalid.style.display = 'block'
        firstNameValid.style.display = 'none'
        error = true
    }

    if(lastNameInput.length >= 3){
        lastNameValid.style.display = 'block'
        lastNameInvalid.style.display = 'none'
    }else{
        lastNameInvalid.style.display = 'block'
        lastNameValid.style.display = 'none'
        error = true
    }

    if(emailInput &&
       emailInput.includes('@') &&
       emailInput.includes('.') &&
       emailInput.lastIndexOf('.') <= emailInput.length - 3 &&
       emailInput.indexOf('@') !== 0
    ) {
        emailValid.style.display = 'block'
        emailInvalid.style.display = 'none'
    }else{
        emailInvalid.style.display = 'block'
        emailValid.style.display = 'none'
        error = true
    }

    if(phoneNumInput && parseInt(phoneNumInput) && phoneNumInput.length === 10 && phoneNumInput.length === parseInt(phoneNumInput).toString().length){
        phoneValid.style.display = 'block'
        phoneInvalid.style.display = 'none'
    }else{
        phoneInvalid.style.display = 'block'
        phoneValid.style.display = 'none'
        error = true
    }

    if(batchNumInput != 'None'){
        batchNumValid.style.display = 'block'
        batchNumInvalid.style.display = 'none'
    }else{
        batchNumInvalid.style.display = 'block'
        batchNumValid.style.display = 'none'
        error = true
    }

    if(currModuleInput != 'None'){
        currModuleValid.style.display = 'block'
        currModuleInvalid.style.display = 'none'
    }else{
        currModuleInvalid.style.display = 'block'
        currModuleValid.style.display = 'none'
        error = true
    }

    if(tncInput){
        tnCInvalid.style.display = 'none'
    }else{
        tnCInvalid.style.display = 'block'
        error = true
    }

    if(!error){
        alert('Your details have been saved successfully!')

        document.getElementById('first-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phone').value = ''
        document.getElementById('batch-number').value = 'None'
        document.getElementById('curr-module').value = 'None'
        document.getElementById('tnC').checked = false

        firstNameValid.style.display = 'none'
        lastNameValid.style.display = 'none'
        emailValid.style.display = 'none'
        phoneValid.style.display = 'none'
        batchNumValid.style.display = 'none'
        currModuleValid.style.display = 'none'
    }

}