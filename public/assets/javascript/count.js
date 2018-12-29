// Objective: Allow a user to land at `/` and count the number of requests they have made to the website.

// Use localStorage to set refresh count to 1 if null, otherwise add to existing count.
let count = localStorage.getItem('refresh') === null ? 1 : parseInt(localStorage.getItem('refresh'), 10) + 1;
localStorage.setItem('refresh', count);

// Update h1 countDisplay
const countDisplay = document.getElementById('countDisplay');
countDisplay.innerText = count;

// Refresh button
const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', function(event){
    window.location.reload();
});