
window.onscroll = function navFunction(){
    const navbar = document.querySelector("nav");
    const navPosition = navbar.offsetHeight ;

    if(navPosition <= window.scrollY){
        navbar.classList.add("nav-active");
        
    }else{
     
        navbar.classList.remove("nav-active");

    }
}



