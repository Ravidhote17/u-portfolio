gsap.to("nav", {
  backgroundColor: "#0D1117",
  height: "4vh",
  duration: 0.5,
  scrollTrigger: {
      trigger: ".nav",
      scroller: "body",
      // markers : true,
      start: "top -10%",
      end: "top -11%",
      scrub:51
  }
})

var tablinks = document.getElementsByClassName("tab-links");

var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

var typed = new Typed(".auto-typed",{
  strings: ["web developer.","coder.", "freelancer"],
  typeSpeed: 75,
  backSpeed: 50,
  loop: true
})

const stickySections = [...document.querySelectorAll('.sticky')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
      transform(stickySections[i])
  }
})

function transform(section){
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scroll_section')
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}
//APPROACH ONE
var t1 = document.querySelector("#tab1")
var t2 = document.querySelector("#tab2")
var t3 = document.querySelector("#tab3")
var p1 = document.querySelector("#p1")
var p2 = document.querySelector("#p2")
var p3 = document.querySelector("#p3")

t1.addEventListener("click", function(){
  removeAllElement()
  p1.style.display = "block"
})

t2.addEventListener("click", function(){
  removeAllElement()
  p2.style.display = "block"
})

t3.addEventListener("click", function(){
  removeAllElement()
  p3.style.display = "block"
})

var removeAllElement = function(){
  p1.style.display = "none"
  p2.style.display = "none"
  p3.style.display = "none"   
}

//APPROACH TWO
// var tab = document.querySelector(".tab")
// var txt = document.querySelector(".txt")

// txt[0].style.display = "block"




const container = document.querySelector('.progress-bars')
const progress = document.querySelectorAll('.progress')
const percentage = document.querySelectorAll('.percentage')
let bol = false;
let count; 

window.addEventListener("scroll", ()=>{
  if(pageYOffset > container.offsetTop - 400 && bol === false){
      for(let i = 0; i < progress.length; i++){
          percentage.innerText = 0;
          count = 0;
          const data = parseInt(progress[i].dataset.count)

          progress[i].style.transition = "width " + (data * 30) + "ms"
          progress[i].style.width = data + "%"

          function updateCount(){
              if(count < data){
                  count++
                  percentage[i].innerText = count + "%"
                  setTimeout(updateCount, 50)
              }else{
                  percentage[i].innerText = data + "%"
              }
          }
          updateCount()
          bol = true;
      }
  }
})

var tl = gsap.timeline()

tl.from(".nav-left, .nav-right a",{
  y:-150,
  // delay:0.5,
  duration:1,
  stagger:0.2
})

tl.from(".home-content h4,.home-content h2, .home-content h1,.welcome",{
  y: 50,
  opacity:0,
  duration:0.5,
  stagger:0.5
})

tl.from(".i",{
  y: -25,
  opacity:0,
  duration:1,
  stagger:0.5,
  repeat:-1,
  yoyo:true
})

tl.from(".overview-left img",{
  x: -250,
  opacity:0,
  duration:1,
  stagger:0.5,
  scrollTrigger:{
      trigger: ".overview-left img",
      scroller: "body",
      scrub:5,
      markers:false,
      start: "top 70%",
      end: "top 30%"
  }
})

tl.from(".overview-right h1, .overview-right h3, .overview-right h2, .overview-right p",{
  y: 50,
  opacity:0,
  duration:0.5,
  stagger:0.5,
  scrollTrigger:{
      trigger: ".overview-right",
      scroller: "body",
      scrub:5,
      markers:false,
      start: "top 80%",
      end: "top 30%"

  }
})

tl.from(".social-media h3,",{
  y: 50,
  opacity:0,
  duration:0.5,
  stagger:0.5,
  scrollTrigger:{
      trigger: ".social-media",
      scroller: "body",
      scrub:5,
      markers:false,
      start: "top 80%",
      end: "top 30%"

  }
})

tl.from(".icon a",{
  y: 50,
  opacity:0,
  duration:0.5,
  stagger:0.5,
  scrollTrigger:{
      trigger: ".icon a",
      scroller: "body",
      scrub:5,
      markers:false,
      start: "top 70%",
      end: "top 20%"

  }
})

tl.to(".skills",{
  x: 50,
  delay:1,
  opacity:0,
  duration:0.5,
  stagger:0.5,
  scrollTrigger:{
      trigger: ".skills h1",
      scroller: "body",
      markers:true,
      scrub:5,
      start: "top 70%",
      end: "top 20%"

  }
})
























































































