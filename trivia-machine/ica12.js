// Select the buttons for fetching a new trivia question and for showing the answer.
const buttonQ = document.querySelector('#js-new-quote');
const buttonA = document.querySelector('#js-answer-btn');

// Define the endpoint URL from which to fetch trivia questions.
const endpoint = "https://api.gameofthronesquotes.xyz/v1/randoms";

// Initialize jsonData to hold the response from the fetch operation.
let jsonData = '';

// Function to fetch a new trivia question and display it.
async function getTrivia() {
    // Clear any existing answer text.
    const answerArea = document.querySelector('#js-answer-text');
    answerArea.textContent = '';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error('The service to fetch a new trivia question is currently unavailable. Please try again later.');
        }

        jsonData = await response.json();
        const quoteText = jsonData['sentence'];
        console.log('here is your data', quoteText)
        const quoteArea = document.querySelector('#js-quote-text');
        quoteArea.textContent = quoteText;
    } catch (err) {
        // Update the webpage to inform the user more gently about the error.
        const errorArea = document.querySelector('#js-quote-text');
        errorArea.textContent = err.message;
    }
}

// Function to display the answer to the current trivia question.
// function getAnswer() {
//     if (!jsonData || !jsonData['answer']) {
//         const answerArea = document.querySelector('#js-answer-text');
//         answerArea.textContent = 'No answer available. Please fetch a new trivia question first.';
//         return;
//     }

//     const answerText = jsonData['answer'];
//     const answerArea = document.querySelector('#js-answer-text');
//     answerArea.textContent = answerText;
// }

// Attach event listeners to buttons for fetching trivia and showing answers.
buttonQ.addEventListener('click', getTrivia);
// buttonA.addEventListener('click', getAnswer);
