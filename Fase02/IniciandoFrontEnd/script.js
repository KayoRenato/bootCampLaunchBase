const modalOverlay = document.querySelector('.modalOverlay');
const cards = document.querySelectorAll('.card');

for( let card of cards) {
  card.addEventListener('click', () => {
    const videoID = card.getAttribute('id')
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoID}`
  })
}

document.querySelector('.closeModal').addEventListener('click', () => {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ""
  
})

