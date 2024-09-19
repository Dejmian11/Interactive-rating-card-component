import './scss/main.scss';

const form = document.querySelector('.form');
const feedbackDiv = document.querySelector('.rating-card__feedback');
const summaryDiv = document.querySelector('.rating-card__summary');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Select checked rating
  const selectedRating = document.querySelector('input[name="rating"]:checked');
  // If no rating selected exit function
  if (!selectedRating) return;
  // Update DOM
  displaySummary();
  updateMessage(selectedRating.value)
});


const updateMessage = (rating) => {
  document.querySelector('.rating-card__selected-rating').textContent = rating;
} 

const displaySummary = () => {
  feedbackDiv.style.display = 'none';
  summaryDiv.style.display = 'grid';
};