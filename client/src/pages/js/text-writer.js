const texts = ["Developer", "Web Developer", "Web designer"];

let speed = 100;

const textElements = document.querySelector(".about-rebecca-text")

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (characterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter, speed);
  }
  else {
    setTimeout(eraseText, 1000)
  }
}


function eraseText(){
  if(textElements.innerHTML.length > 0){
    textElements.innerHTML = textElements.innerHTML.slice(0,1);
    setTimeout(eraseText,50);
  }
  else{
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500)
  }
}