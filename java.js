const submitButton = document.querySelector('.submit');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const ratingButton = document.querySelectorAll('.rating-button');

let selectedRating = null;

ratingButton.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
            selectedRating = null;
        } else {
            ratingButton.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedRating = button.innerHTML;
            document.querySelector('.selection').innerHTML = selectedRating;
        }
    }); 
});

submitButton.addEventListener('click', () => {
    if (!selectedRating) {
        alert('Please select a rating before submitting');
        return;
    }
    ratingState.classList.add('hide');
    thankYouState.classList.remove('hide');
});