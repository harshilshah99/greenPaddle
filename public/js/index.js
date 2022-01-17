let b1=document.querySelector('#b1')
let b2=document.querySelector('#b2')
let b3=document.querySelector('#b3')
let tagline=document.querySelector('h1')
let booka=document.querySelector('#booka')

b1.addEventListener('click',()=>{
    tagline.innerText='Rent cycle of your choice';
    booka.innerText='Book Now';
});
b2.addEventListener('click',()=>{
    
    tagline.innerText='More than over 100 cycles';
    booka.innerText='Choose Now';
    
});
b3.addEventListener('click',()=>{
    tagline.innerText='Delivered all over Mumbai';
    booka.innerText='Ride Now';
});

let scrolltotop=document.querySelector('#scrolltotop')
scrolltotop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });

})

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})


