const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes(); // show the first few boxes at the start before scrolling

function checkBoxes() {
  const bottomTrigger = window.innerHeight / 5 * 4;
  
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top; 
    if(boxTop < bottomTrigger) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}