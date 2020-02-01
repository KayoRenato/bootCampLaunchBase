const modalOverlay = document.querySelector('.modalOverlay');
const degrees = document.querySelectorAll('.profile a');

for( let item of degrees) {
  item.addEventListener('click', () => {
    const degreeID = item.getAttribute('id')
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `${degreeID}`
  })
}

document.querySelector('.closeModal').addEventListener('click', () => {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ``
  
})

