const button = document.querySelector('#js-new-quote');
const btnClick = button.addEventListener('click', getFact);

const endpoint = "https://api.gameofthronesquotes.xyz/v1/random";

async function getFact(){

    try{
        const response = await fetch(endpoint);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }

        jsonData = await response.json();
        
        const quoteText = jsonData['data'].character;
        console.log(quoteText);
        const quoteArea = document.querySelector('#js-quote-text');
        quoteArea.textContent = quoteText;
        
    }
    catch(err){
        console.log(err);
        alert('failed');
    }
}

const showImageButton = document.getElementById("#show-image-button");
// const imgBtn = document.addEventListener('click', showImage)
// const myImage = document.getElementById("my-image");
// showImageButton.addEventListener("click", () => {

//    myImage.style.display = "block"; 
// });
// function showImage(){
//     imgBtn.style.display = "block"
// }
   

  