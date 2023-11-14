const html = document.documentElement;
const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d");
const issCont = document.querySelector('canvas');
const numOfFrames = 150;

function getCurrentFrame (index) {
    return `./media/iss-anim-sequence/${index.toString().padStart(4, '0')}.png`;
}

function preloadImages () {
    for (let i=0; i<numOfFrames; i++) {
        const img = new Image();
        img.src = getCurrentFrame(i);
    }
}


const img = new Image();
img.src = getCurrentFrame(0);
canvas.width=1280;
canvas.height=720;

img.onload = function() {
    context.drawImage(img, 0, 0);
    issCont.classList.add('fade-in');
}


function updateImage (frame) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    img.src = getCurrentFrame(frame);
    context.drawImage(img, 0, 0);
}


window.addEventListener('scroll', () => {  
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      numOfFrames - 1,
      Math.ceil(scrollFraction * numOfFrames)
    );
    
    requestAnimationFrame(() => updateImage(frameIndex));
  });

preloadImages();


// Page animation
const h1 = document.querySelector('h1');

document.addEventListener('DOMContentLoaded', () => {
    h1.classList.add('fade-up');
})