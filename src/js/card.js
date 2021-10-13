// banner card script

function handleMouseover(e) {
    document.querySelector(".active1").classList.remove("active1");
    e.target.closest(".card").classList.add("active1");
}

document.querySelectorAll(".card").forEach(card => card.addEventListener("mouseover", handleMouseover) );



// navbar


$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navbar-light").css("background" , "blue");
        }
  
        else{
            $(".navbar-light").css("background" , "#333");  	
        }
    })
  })