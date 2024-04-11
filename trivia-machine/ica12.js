const buttonQ = document.querySelector('#js-new-quote');
// console.log(button);
const btnClickQ = buttonQ.addEventListener('click', getTrivia); 
// look for a click, what we want it to do when the user clicks on the button
// expecting newTrivia to be a function
const buttonA = document.querySelector('#js-answer-btn');
const btnClickA = buttonA.addEventListener('click', getAnswer);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion"; // variable that holds the endpoint
// key of question
// key of answer

var jsonData = '';

async function getTrivia(){ 
    //console.log("button pressed!");
    const answerArea = document.querySelector('#js-answer-text');
    answerArea.textContent = '';

    try{
        var response = await fetch(endpoint);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
      // use fetch to get a new question, if successful, change webpage else output error
        jsonData = await response.json();

        const quoteText = jsonData['question'];
        const quoteArea = document.querySelector('#js-quote-text');
        quoteArea.textContent = quoteText;
    }
    catch(err){
        console.log(err);
        alert('failed');
    }
}

function getAnswer(){

    const answerText = jsonData['answer'];
    const answerArea = document.querySelector('#js-answer-text');
    answerArea.textContent = answerText;
}