const wdrum = document.querySelectorAll('.drum');
const getAudiofile = new Audio('./sounds/crash.mp3');

for (let i = 0; i < wdrum.length; i++) {
  wdrum[i].addEventListener('click', function () {
    if (this.innerHTML === 'a') {
      new Audio('./sounds/tom-1.mp3').play();
    } else if (this.innerHTML === 'w') {
      new Audio('./sounds/crash.mp3').play();
    } else if (this.innerHTML === 's') {
      new Audio('./sounds/tom-2.mp3').play();
    } else if (this.innerHTML === 'd') {
      new Audio('./sounds/tom-3.mp3').play();
    } else if (this.innerHTML === 'j') {
      new Audio('./sounds/tom-4.mp3').play();
    } else if (this.innerHTML === 'k') {
      new Audio('./sounds/kick-bass.mp3').play();
    } else if (this.innerHTML === 'l') {
      new Audio('./sounds/snare.mp3').play();
    }
  });
}

// for (let i = 0; i < drum.length; i++) {
//     drum[i].addEventListener('click', function () {
//       console.log(this.innerHTML);
//     });
//   }
