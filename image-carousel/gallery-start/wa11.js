const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ['pic1.jpg', 'pic2.jpg','pic3.jpg','pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alts = {
  'pic1.jpg' : 'close up of eye',
  'pic2.jpg' : 'wave rock',
  'pic3.jpg' : 'purple flowers',
  'pic4.jpg' : 'egyptian tomb',
  'pic5.jpg' : 'moth on leaf'
}
/* Looping through images */

for(const i of filenames){
  // construct src ath and alt text
  const nalt = alts[i];
  const nsrc = `images/${i}`;

  // update image for the thumbnail
  const newImage = document.createElement('img');
  newImage.setAttribute('src', nsrc);
  newImage.setAttribute('alt', nalt);
  thumbBar.appendChild(newImage);

  // change displayed image when thumbnail is clicked
  newImage.addEventListener('click', () =>{
    displayedImage.setAttribute('src', nsrc);
    displayedImage.setAttribute('alt', nalt);
  })

}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', ()=>{
  const btnClass = btn.getAttribute('class'); // current class of btn

  if(btnClass === 'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  }
  else{
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'
  }
})