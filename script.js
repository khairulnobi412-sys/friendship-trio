/*=========================================
  OUR FOREVER TRIO
  SCRIPT.JS PART 1
=========================================*/

// AOS Animation
AOS.init({
    duration: 1200,
    once: true,
    easing: "ease-in-out"
});

// Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 1000);

});

// Smooth Scroll

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Scroll Button

const startBtn = document.getElementById("journeyBtn");

if(startBtn){

startBtn.onclick = ()=>{

document.querySelector("#about").scrollIntoView({

behavior:"smooth"

});

};

}

// Music

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing=false;

if(musicBtn){

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

musicBtn.innerHTML="Pause Music";

playing=true;

}

else{

music.pause();

musicBtn.innerHTML="Play Music";

playing=false;

}

});

}

// Floating Hearts

const hearts=document.getElementById("floating-hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,600);

// Typing Effect

const typing=document.getElementById("typingText");

const message=`Dear Friends,

Thank you for every smile.

Thank you for every memory.

Thank you for being my second family.

Happy Friendship Day ❤️`;

let i=0;

function typeLetter(){

if(typing && i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(typeLetter,45);

}

}

typeLetter();
/*=========================================
   FRIENDSHIP COUNTER
=========================================*/

const startDate = new Date("2022-08-07");

function updateCounter(){

const today = new Date();

let diff = today - startDate;

let days = Math.floor(diff / (1000*60*60*24));

let years = Math.floor(days / 365);

let months = Math.floor((days % 365) / 30);

let remainDays = days % 30;

document.getElementById("years").innerHTML = years;

document.getElementById("months").innerHTML = months;

document.getElementById("days").innerHTML = remainDays;

}

updateCounter();

/*=========================================
        SHOOTING STARS
=========================================*/

function createStar(){

const star = document.createElement("div");

star.classList.add("shooting-star");

star.style.left = Math.random()*window.innerWidth+"px";

star.style.animationDuration = (2+Math.random()*3)+"s";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},5000);

}

setInterval(createStar,3000);

/*=========================================
        IMAGE LIGHTBOX
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const lightbox=document.createElement("div");

lightbox.style.position="fixed";

lightbox.style.top="0";

lightbox.style.left="0";

lightbox.style.width="100%";

lightbox.style.height="100%";

lightbox.style.background="rgba(0,0,0,.9)";

lightbox.style.display="flex";

lightbox.style.justifyContent="center";

lightbox.style.alignItems="center";

lightbox.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

lightbox.appendChild(image);

document.body.appendChild(lightbox);

lightbox.onclick=()=>{

lightbox.remove();

};

});

});

/*=========================================
      SURPRISE BUTTON
=========================================*/

const surpriseBtn=document.getElementById("surpriseBtn");

if(surpriseBtn){

surpriseBtn.addEventListener("click",()=>{

alert("❤️ Happy Friendship Day ❤️\n\nNo matter where life takes us...\nWe'll always stay together forever.");

});

}

/*=========================================
      ACTIVE MENU
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*=========================================
      AUTO PHOTO SLIDER
=========================================*/

const slides = document.querySelectorAll(".gallery-item");

let currentSlide = 0;

function autoSlider() {

    slides.forEach((slide) => {
        slide.style.opacity = ".5";
        slide.style.transform = "scale(.95)";
    });

    if (slides.length > 0) {
        slides[currentSlide].style.opacity = "1";
        slides[currentSlide].style.transform = "scale(1)";
    }

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

}

setInterval(autoSlider,3000);

autoSlider();

/*=========================================
      CONFETTI
=========================================*/

function createConfetti(){

const confetti=document.createElement("div");

confetti.innerHTML="🎉";

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.fontSize=(15+Math.random()*25)+"px";

confetti.style.zIndex="9999";

confetti.style.transition="5s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.top="110vh";

},100);

setTimeout(()=>{

confetti.remove();

},5500);

}

setInterval(createConfetti,500);

/*=========================================
      FIREWORKS
=========================================*/

function fireworks(){

const fire=document.createElement("div");

fire.innerHTML="✨";

fire.style.position="fixed";

fire.style.left=Math.random()*100+"vw";

fire.style.top=Math.random()*80+"vh";

fire.style.fontSize=(30+Math.random()*40)+"px";

fire.style.zIndex="99999";

fire.style.transition=".8s";

document.body.appendChild(fire);

setTimeout(()=>{

fire.style.transform="scale(3)";

fire.style.opacity="0";

},100);

setTimeout(()=>{

fire.remove();

},900);

}

setInterval(fireworks,1200);

/*=========================================
      CURSOR GLOW
=========================================*/

const cursor=document.createElement("div");

cursor.style.width="25px";

cursor.style.height="25px";

cursor.style.border="2px solid #ff4d94";

cursor.style.borderRadius="50%";

cursor.style.position="fixed";

cursor.style.pointerEvents="none";

cursor.style.zIndex="999999";

cursor.style.transition=".08s";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX-12+"px";

cursor.style.top=e.clientY-12+"px";

});

/*=========================================
      FADE IN ON SCROLL
=========================================*/

const fadeElements=document.querySelectorAll(".fade-up");

window.addEventListener("scroll",()=>{

fadeElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-120){

el.classList.add("active");

}

});

});

/*=========================================
      SURPRISE MESSAGE
=========================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

alert("❤️ Happy Friendship Day ❤️\n\nThis website was made with love for the Forever Trio.");

},3000);

});

/*=========================================
      MUSIC AUTOPLAY AFTER CLICK
=========================================*/

document.body.addEventListener("click",()=>{

const music=document.getElementById("bgMusic");

if(music){

music.play().catch(()=>{});

}

},{once:true});

/*=========================================
      END OF SCRIPT
=========================================*/

console.log("Forever Trio Website Loaded Successfully ❤️");
