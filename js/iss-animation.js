const html = document.documentElement;
const canvas = document.querySelector('canvas');
canvas.width=1280;
canvas.height=720;
const context = canvas.getContext("2d");
const issCont = document.querySelector('canvas');
const numOfFrames = 150;
let issAnimPath;


function handleScreenSize () {
    if (window.innerWidth < 600) {
        issAnimPath = './media/iss-anim-sequence/jpg/';
        return 'less';
    } else {
        issAnimPath = './media/iss-anim-sequence/png/'
        return 'greater';
    }
}

window.addEventListener('resize', handleScreenSize);


function getCurrentFrame (index) {
    handleScreenSize();
    if (handleScreenSize() === 'less') {
        return issAnimPath + index.toString().padStart(4, '0') + '.jpg';
    } else {
        return issAnimPath + index.toString().padStart(4, '0') + '.png';
    }
}

function preloadImages () {
    for (let i=0; i<numOfFrames; i++) {
        const img = new Image();
        img.src = getCurrentFrame(i);
    }
}

function showLoading () {
    const message = document.createElement('p');
    message.setAttribute('id', 'loadingMessage');
    message.textContent = 'Loading...'
    const animCont = document.querySelector('.animation-cont');
    animCont.appendChild(message);
    // context.fillText(message, 0, 0);
}

function removeLoading () {
    const message = document.querySelector('#loadingMessage');
    if (message != null) {
        message.remove();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showLoading();
});

const img = new Image();
img.src = getCurrentFrame(0);


img.onload = function() {
    removeLoading();
    context.drawImage(img, 0, 0);
    issCont.classList.add('fade-in');
}


function updateImage (frame) {
    if (handleScreenSize() === 'greater') {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
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