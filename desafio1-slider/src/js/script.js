const box_image = document.querySelectorAll('.box_image')
const image_next = document.querySelector('.image_next')
const image_prev = document.querySelector('.image_prev')
const box_amount = box_image.length -1
let current_index = 0

remove_add_classList = () => {
  box_image.forEach(item => item.classList.remove('visible'))
  box_image[current_index].classList.add('visible')
}

style_Bnt = () => {
  if(current_index === box_amount) {

    image_next.style.filter = 'opacity(0.5)'

  } else if(current_index === 0) {

    image_prev.style.filter = 'opacity(0.5)'

  } else {

    image_next.style.filter = 'opacity(1)'
    image_prev.style.filter = 'opacity(1)'

  }
}


image_next.addEventListener('click', () => {
  current_index === box_amount ? box_amount : ++current_index
  style_Bnt()
  remove_add_classList()
})

image_prev.addEventListener('click', () => {
  current_index === 0 ? current_index : --current_index
  style_Bnt()
  remove_add_classList()

  console.log(current_index)
})

