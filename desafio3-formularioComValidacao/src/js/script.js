const button = document.getElementById('button')

const input_name = document.getElementById('input_name')
const message_name = document.getElementById('message_name')

const input_email = document.getElementById('input_email')
const message_email = document.getElementById('message_email')

const input_telephone = document.getElementById('input_telephone')
const message_telephone = document.getElementById('message_telephone')

const message = document.getElementById('message')
const message_textarea = document.getElementById('message_textarea')



input_name.addEventListener('input', () => {
  
  if(input_name.value !== '') {
    input_name.classList.remove('input_invalid')
    input_name.classList.add('input_valid')
    message_name.classList.remove('message_invalid')
  }else {
    input_name.classList.remove('input_valid')
    input_name.classList.add('input_invalid')
    message_name.classList.add('message_invalid')
  }

})

input_email.addEventListener('input', () => {
  
  if(input_email.value !== '') {
    input_email.classList.remove('input_invalid')
    input_email.classList.add('input_valid')
    message_email.classList.remove('message_invalid')
  }else {
    input_email.classList.remove('input_valid')
    input_email.classList.add('input_invalid')
    message_email.classList.add('message_invalid')
  }
  
})

input_telephone.addEventListener('input', () => {
  
  if(input_telephone.value !== '' && !isNaN(input_telephone.value) == true) {
    input_telephone.classList.remove('input_invalid')
    input_telephone.classList.add('input_valid')
    message_telephone.classList.remove('message_invalid')
  }else {
    input_telephone.classList.remove('input_valid')
    input_telephone.classList.add('input_invalid')
    message_telephone.classList.add('message_invalid')
    message_telephone.innerHTML = 'somente números'
  }

})

message.addEventListener('input', () => {
  
  if(message.value !== '') {
    message.classList.remove('input_invalid')
    message.classList.add('input_valid')
    message_textarea.classList.remove('message_invalid')
  }else {
    message.classList.remove('input_valid')
    message.classList.add('input_invalid')
    message_textarea.classList.add('message_invalid')
  }

})


button.addEventListener('click', (event) => {
  event.preventDefault()

  if(input_name.value == ''){
    input_name.classList.add('input_invalid')
    message_name.classList.add('message_invalid')
  } 

  if(input_email.value == ''){
    input_email.classList.add('input_invalid')
    message_email.classList.add('message_invalid')
  } 
  
  if(input_telephone.value == ''){
    input_telephone.classList.add('input_invalid')
    message_telephone.classList.add('message_invalid')
  } 
  
  if(message.value == ''){
    message.classList.add('input_invalid')
    message_textarea.classList.add('message_invalid')
  } 
})