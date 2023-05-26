const potter = document.getElementById('potter');
const tiro = document.querySelector('.tiro');

const showVar = () => {

    tiro.style.display = 'block';

    const audio = new Audio('../sound/avada-kedavra-kurwa.mp3');
    audio.play();

    setTimeout(() => {
        tiro.style.display = 'none';
    }, 1000);

 
}

potter.addEventListener('click', showVar)