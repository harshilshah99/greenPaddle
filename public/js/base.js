let scrolltotop=document.querySelector('#scrolltotop')
scrolltotop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

