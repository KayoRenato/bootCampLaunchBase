const modalOverlay = document.querySelector('.modalOverlay');
const cards = document.querySelectorAll('.card');

for( let card of cards) {
  card.addEventListener('click', () => {
    const videoID = card.getAttribute('id')
    window.location.href = `/video?id=${videoID}`
  })
}

