const html = document.documentElement;
const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d");
const numOfFrames = 150;

function getCurrentFrame (index) {
    return `./media/iss-anim-sequence/${index.toString().padStart(4, '0')}.png`;
}

function preloadImages  () {
    for (let i=1; i<numOfFrames; i++) {
        const img = new Image();
        img.src = getCurrentFrame(i);
    }
}

canvas.width=1920;
canvas.height=1080;

const img = new Image();
img.src = getCurrentFrame(1);

img.onload = function() {
    context.drawImage(img, 0, 0);
}


function updateImage (frame) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    img.src = getCurrentFrame(frame);
    context.drawImage(img, 0, 0);
}


window.addEventListener('scroll', () => {
    const animContainer = document.querySelector('.animation-cont');
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min( numOfFrames - 1,
        Math.ceil(scrollFraction * numOfFrames));

    requestAnimationFrame(() => updateImage(frameIndex + 1))
})

preloadImages();