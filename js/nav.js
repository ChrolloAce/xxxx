var toggle = document.querySelector("#nav .toggle-btn");
var collapse = document.querySelector("#nav .collapse");



var sideMenuButton = document.querySelector('.side-menu-button');
var menuToggled = false;
var menu = document.querySelector('.phone-menu'); 



function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    
    console.log(collapse == null);
    // Display result inside a div element
    if(w >= 1024)
    {
        if(collapse.classList.contains('active'))
        {
            collapse.classList.remove('active');
        }
    }
}


const headerEl = document.querySelector(".navigation-holder");
var height = headerEl.offsetHeight;
var formEl =  document.getElementsByTagName('body')[0];
formEl.style.marginTop = height  + 'px';
console.log(formEl.style.marginTop);
window.onload = function get_body() {


  }





toggle.addEventListener("click", () => {
    
    console.log("clicked");
    collapse.classList.toggle('active');
});


document.addEventListener('click', function handleClickOutsideBox(event) {
    const sideMenu = document.querySelector('.phone-menu');
  
    if(menuToggled)
    {
        if (!sideMenu.contains(event.target)) {
            ToggleSideMenu();
        }
    }
  });


  sideMenuButton.addEventListener("click", () => {
    
    const toggleTimeout = setTimeout(()=>{
        if(collapse.classList.contains('active'))
        {
           collapse.classList.remove('active');
        }
        ToggleSideMenu();
    }, 2);
});


function ToggleSideMenu() {
    
    if(menuToggled)
    {
        menu.classList.remove('active');
        
    }
    else
    {
        menu.classList.add('active');    
    }
    console.log(menu.classList.contains('active'));
    menuToggled = !menuToggled;
}