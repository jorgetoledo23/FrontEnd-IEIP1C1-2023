const openModalBtn = document.getElementById('open-modal-btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
