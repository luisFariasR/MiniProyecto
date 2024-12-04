
const modal = document.querySelector(`.modal-content`);
const buttonDiss = document.querySelector(`.btn_dismiss`);
const input = document.querySelector(`.input`);
const btnSubs = document.querySelector(`.btn-subs`);
const alert = document.querySelector(`.alert`)
const textModal = document.querySelector(`.textModal`);


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
 
function showOf() {
    const emailValue = input.value;
  
  if (validateEmail(emailValue)) {
    modal.classList.remove(`d-none`);
    const  mail = `
    <p class="textModal">
      A confirmation email has been sent to <br>
      ${emailValue} Please open it and click <br> the button inside to
      confirm your subscription.</p>`

      textModal.innerHTML = mail;
  } else {

    alert.classList.remove(`d-none`);
    input.classList.add(`border-danger`);
  }
  
  input.value = ""
}
function closeModal(){
    modal.classList.add(`d-none`);
    alert.classList.add(`d-none`);
    input.classList.remove(`border-danger`);
    
}

buttonDiss.addEventListener(`click`, closeModal);
btnSubs.addEventListener(`click`, showOf);







