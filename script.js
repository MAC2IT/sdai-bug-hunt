// Select the button and the fun fact elements
const funFactButton = document.getElementById('funFactButton');
const funFact = document.getElementById('funFact');

// Add an event listener to the button
funFactButton.addEventListener('click', function () {
    // Toggle the display of the fun fact
    if (funFact.style.display === 'none' || funFact.style.display === '') {
        funFact.style.display = 'block'; // Show the fun fact
        // Add a message below the fun fact
        const message = document.createElement('p');
        message.textContent = 'Rock and Roll is Music to the Soul';
        message.id = 'additionalMessage';
        message.style.color = '#ff5722'; // Styling for the message
        message.style.marginTop = '10px';
        // Append the message only if it doesn't already exist
        if (!document.getElementById('additionalMessage')) {
            funFact.parentElement.appendChild(message);
        }
    } else {
        funFact.style.display = 'none'; // Hide the fun fact
        // Remove the message if it exists
        const existingMessage = document.getElementById('additionalMessage');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
});

