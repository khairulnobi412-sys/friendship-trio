const slides=[...document.querySelectorAll(".slide")];
const navButtons=[...document.querySelectorAll(".slide-nav button")];
const currentEl=document.getElementById("currentSlide");
const progress=document.getElementById("progressBar");
let current=0, animating=false, musicOn=false;

function showSlide(index,direction=1){
  if(animating || index===current || index<0 || index>=slides.length)return;
  animating=true;
  const old=slides[current], next=slides[index];
  old.classList.remove("active");
  if(direction<0) old.classList.add("exit-left");
  next.classList.remove("exit-left");
  next.classList.add("active");
  current=index;
  currentEl.textContent=String(current+1).padStart(2,"0");
  progress.style.width=((current+1)/slides.length*100)+"%";
  navButtons.forEach((b,i)=>b.classList.toggle("active",i===current));
  setTimeout(()=>{old.classList.remove("exit-left");animating=false},750);
}
function next(){showSlide(Math.min(current+1,slides.length-1),1)}
function prev(){showSlide(Math.max(current-1,0),-1)}

document.getElementById("next").onclick=next;
document.getElementById("prev").onclick=prev;
document.querySelectorAll("[data-next]").forEach(b=>b.onclick=next);
navButtons.forEach(b=>b.onclick=()=>showSlide(Number(b.dataset.slide),Number(b.dataset.slide)>current?1:-1));
document.getElementById("replay").onclick=()=>showSlide(0,-1);

window.addEventListener("keydown",e=>{
  if(["ArrowRight"," ","PageDown"].includes(e.key)){e.preventDefault();next()}
  if(["ArrowLeft","PageUp"].includes(e.key)){e.preventDefault();prev()}
  if(e.key==="Home")showSlide(0,-1);
  if(e.key==="End")showSlide(slides.length-1,1);
  if(/^[1-7]$/.test(e.key))showSlide(Number(e.key)-1,Number(e.key)-1>current?1:-1);
});

let touchX=0;
window.addEventListener("touchstart",e=>touchX=e.changedTouches[0].screenX,{passive:true});
window.addEventListener("touchend",e=>{
  const dx=e.changedTouches[0].screenX-touchX;
  if(Math.abs(dx)>50) dx<0?next():prev();
},{passive:true});

function makeHeart(){
  const h=document.createElement("span");
  h.className="heart-float";h.textContent=Math.random()>.25?"❤️":"✦";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(10+Math.random()*15)+"px";
  document.getElementById("hearts").appendChild(h);
  setTimeout(()=>h.remove(),6000);
}
setInterval(makeHeart,1100);

const quotes=[
"Some people come into our lives for a reason. Some stay for a season. True friends become family.",
"Three different personalities. One unbreakable bond. A thousand memories still waiting to happen.",
"No matter where life takes us, the best memories will always have the three of us in them."
];
let qi=0;
setInterval(()=>{
  qi=(qi+1)%quotes.length;
  const q=document.getElementById("quoteText");
  q.style.opacity=0;
  setTimeout(()=>{q.textContent=quotes[qi];q.style.opacity=1;document.querySelectorAll(".quote-dots span").forEach((d,i)=>d.classList.toggle("active",i===qi))},300);
},5000);

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");
const heroMusic=document.getElementById("heroMusic");
function toggleMusic(){
  if(!music)return;
  if(musicOn){music.pause();musicOn=false;musicBtn.textContent="♫";heroMusic.textContent="Play Music"}
  else{music.play().then(()=>{musicOn=true;musicBtn.textContent="Ⅱ";heroMusic.textContent="Pause Music"}).catch(()=>{heroMusic.textContent="Add music file first"})}
}
musicBtn.onclick=toggleMusic; heroMusic.onclick=toggleMusic;

document.getElementById("menuBtn")?.addEventListener("click",()=>{
  document.getElementById("slideNav").style.display =
  getComputedStyle(document.getElementById("slideNav")).display==="none" ? "flex":"none";
});

window.addEventListener("load",()=>{
  setTimeout(()=>document.getElementById("loader").style.opacity="0",500);
  setTimeout(()=>document.getElementById("loader").remove(),1300);
  navButtons[0].classList.add("active");
  progress.style.width=(100/slides.length)+"%";
});
