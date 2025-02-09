// Function to navigate to the yes.html page when "Yes" is clicked
function nextPage() {
    window.location.href = "yes.html"; // This will redirect the user to the yes.html page
}

// Function to move the "No" button when the user hovers over it
function moveButton() {
    const noButton = document.getElementById('noButton');
    
    // Apply wiggle animation class to the button
    noButton.classList.add('wiggle');
    
    // Remove the wiggle class after the animation completes (to allow it to be triggered again later)
    setTimeout(() => {
        noButton.classList.remove('wiggle');
    }, 500); // Match this to the duration of the wiggle animation
}
