 // Add a scroll event listener to change the navbar style on scroll


window.onscroll = function () {
    let navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };


  //Add a event listener for a alert messgae
 
  window.addEventListener( createAlert())

  function createAlert(){
    alert("This Website is not responsive")
  }


