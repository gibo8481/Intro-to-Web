const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgs = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']


/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg' : 'close up of eye',
    'pic2.jpg' : 'wave rock',
    'pic3.jpg' : 'purple flowers',
    'pic4.jpg' : 'egyptian tomb',
    'pic5.jpg' : 'moth on leaf'
}

/* Looping through images */
for(const i of imgs){
    const newImg = document.createElement('img');
    newImg.setAttribute('src',)
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);


/* Wiring up the Darken/Lighten button */
