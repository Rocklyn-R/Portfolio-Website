let submitButton = document.getElementById('submit');
let thankYouMessage = document.getElementById('thank-you-message');
let form = document.getElementById('myForm');
let feelFree = document.getElementById('feel-free-msg')

const form1 = document.querySelector('form')
form1.onsubmit = (e) => {
  e.preventDefault()
  console.log('submitted')
}

function submitMessage() {
    thankYouMessage.style.display = 'block';
    form.style.display = 'none';
    feelFree.style.display = 'none';
}

submitButton.addEventListener('submit', submitMessage);

