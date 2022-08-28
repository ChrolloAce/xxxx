// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}





// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const footer = document.getElementById('footer');

console.log(footer);


function HandleLoading()
{
    loader.style.opacity = 1;
    loader.style.display = 'flex';
    loader.style.height = '100vh';

    if(footer != null)
  footer.style.visibility = 'hidden';

    main.style.display = 'none';
    main.style.opacity = 0;
    disableScroll();
    
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        enableScroll();

        if(footer != null) footer.style.visibility = 'visible';

        main.style.display = 'block';
        setTimeout(() => {main.style.opacity = 1;} , 50);
    }, 1000);
}

HandleLoading();









