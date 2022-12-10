const circles =
document.querySelectorAll('.circle');
let activelight =0 ;

setInterval(changelight , 1000);
function changelight(){
    circles[activelight].className='circle';
    activelight++;

    if(activelight > 2) { //3-1 3lights
         activelight=0;
    }
    const currentlight = circles[activelight];

    currentlight.classList.add(currentlight.getAttribute('color'))
}