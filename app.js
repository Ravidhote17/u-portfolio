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
        scrub: 1
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

var t1 = document.querySelector(".frontend h2")
var t2 = document.querySelector(".backend h2")
var t3 = document.querySelector(".dsa h2")
var p1 = document.querySelector(".frontend-content")
var p2 = document.querySelector(".backend-content")
var p3 = document.querySelector(".dsa-content")


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