const audio = document.querySelector('audio');
const audioBtn = document.querySelector('button');
const controls = document.querySelectorAll('.itemType')
const images = ["url('assets/img/forest.jpg')","url('assets/img/solovey.jpg')","url('assets/img/drozd.jpg')","url('assets/img/zarynka.jpg')","url('assets/img/javoronok.jpg')","url('assets/img/slavka.jpg')"]
const audios = ['assets/audio/forest.mp3','assets/audio/solovey.mp3','assets/audio/drozd.mp3','assets/audio/zarynka.mp3','assets/audio/javoronok.mp3','assets/audio/slavka.mp3']
let isPlay = false;
const mainImage = document.querySelector('main');

function playAudio() {
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}

function pauseAudio() {
  audio.pause();
  isPlay = false;
}

function selectAudioAudio() {
    
    if (isPlay) {pauseAudio()}
    else {playAudio()}    
}
  

  function toggleBtn() {
    audioBtn.classList.toggle('pause');
  }

  function changeLinkColor(event) {
    let element = event.target;
    for (let i = 0; i < controls.length; i++) {
        controls[i].classList.remove('active')
    }
    element.classList.add('active')
   
}

function changeImages() {
    
   let index;
   for (let i = 0; i < controls.length; i++) {
       if (controls[i].classList.contains('active')) { 
           index = i;
       }
   }
   mainImage.style.background = images[index]
   
   audio.src = audios[index]
   console.log(isPlay)
   if (isPlay) {
    audio.currentTime = 0;
    audio.play();} else {
        audio.pause()
    }
   
 }

audioBtn.addEventListener('click', selectAudioAudio);

audioBtn.addEventListener('click', toggleBtn);

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', changeLinkColor);
    controls[i].addEventListener('click', changeImages);
}