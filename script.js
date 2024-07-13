//loader animation
var tl = gsap.timeline()

tl.to(".loader", {
    delay: 1.5,
    duration:1,
})
tl.from(".loader-overlay", {
    opacity:0,
    duration:.5,
    display:"none"
})

tl.to(".loader2 .elements .elem", {
    opacity:1,
    scale:1.1,
    backgroundColor : "#FF6400",
    stagger:.2,
})

tl.to(".loader2 .elements .elem", {
    opacity:0,
    display:"none"
})
tl.to(".loader2", {
    duration:0.2,
    opacity:0,
    display:"none"
})

tl.to(".loader",{
    display:"none"
})

tl.from(".homepage-bg", {
    transform:"scaleY(0.5) scaleX(0.8) translateY(80%)",
    duration:0.6
})
tl.to(".subscribe-face", {
    opacity : 1
})

tl.from("nav", {
    opacity:0,
    delay:.6,
},"home")
// tl.from(".page1 .center-text", {
//     opacity:0,
//     delay:.6
// },"home")
//main transition to background black on scrolling
gsap.to(".main",{
    backgroundColor : "black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top 100%",
        scrub:2
    }
})

gsap.to("nav", {
    background:"linear-gradient(rgba(0, 0, 0, 0.808),rgba(0, 0, 0, 0))",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -10%",
        scrub:2
    }
})

//search button code
var search = document.querySelector("nav .search")
var searchOpt = document.querySelector(".search-option")
var searchClose = document.querySelector(".search-option .close")

search.addEventListener("click", function(){
    searchOpt.style.width="100%"
    searchOpt.style.opacity=1
})

searchClose.addEventListener("click", function(){
    searchOpt.style.width="0%"
    searchOpt.style.opacity=0
})

//page2 side section animation-----------------------------------------------------------------
gsap.from(".page2 .explore-products-section h5, .explore-products-section .underline",{
    x:-200,
    opacity:0,
    delay:0.2,
    duration:.2,
    stagger:.5,
    scrollTrigger:{
        trigger:".page2 .explore-products-section h5, .explore-products-section .underline",
        scroller:"body",
        start: "top 50%"
    }
})

//page2 animation---------------------------------------------------------------------------------------
gsap.from(".page2 #products .p1 img",{
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 #products .p1 img",
        scroller:"body",
        start:"top 80%"
    }
})
gsap.from(".page2 #products .p1 .descr",{
    x:100,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 #products .p1 .descr",
        scroller:"body",
        start:"top 80%"
    }
})
gsap.from(".page2 #products .p2 img",{
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 #products .p2 img",
        scroller:"body",
        start:"top 80%"
    }
})
gsap.from(".page2 #products .p2 .descr",{
    x:-100,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 #products .p2 .descr",
        scroller:"body",
        start:"top 80%"
    }
})

gsap.from(".page2 #products .p3 img",{
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 #products .p3 img",
        scroller:"body",
        start:"top 80%"
    }
})
gsap.from(".page2 #products .p3 .descr",{
    x:100,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 #products .p3 .descr",
        scroller:"body",
        start:"top 80%"
    }
})

gsap.from(".page2 #products .p4 img",{
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 #products .p4 img",
        scroller:"body",
        start:"top 80%"
    }
})
gsap.from(".page2 #products .p4 .descr",{
    x:-100,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 #products .p4 .descr",
        scroller:"body",
        start:"top 80%"
    }
})

//page3 scrolling basis animation--------------------------------------------------------------
gsap.from(".page3 .carousel",{
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page3 .carousel",
        scroller:"body",
        start:"top 60%",
    }
})

//page3 swiper----------------------------------------------------------------------------------
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    loop: true,
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    //   progressContent.style.display="none";  
        progressCircle.style.display="none";

    }
  }
});

//page4 side section animation-----------------------------------------------------------------
gsap.from(".page4 .recent-releases-section h5, .recent-releases-section .underline",{
    x:-200,
    opacity:0,
    delay:0.2,
    duration:.2,
    stagger:.5,
    scrollTrigger:{
        trigger:".page4 .recent-releases-section h5, .recent-releases-section .underline",
        scroller:"body",
    }
})

//page6 side section animation-----------------------------------------------------------------
gsap.from(".page6 .join-us-section h5, .join-us-section .underline",{
    x:-200,
    opacity:0,
    delay:0.2,
    duration:.2,
    stagger:.5,
    scrollTrigger:{
        trigger:".page6 .join-us-section h5, .join-us-section .underline",
        scroller:"body",
    }
})



//page7-------------------------------------------------------------------------------------------------------

//figurine
var figi = document.querySelector(".page7 .figurine img")
var figc = document.querySelector(".page7 .figurine .content")
var figClose = document.querySelector(".page7 .figurine .close i")

figi.addEventListener("click", function(){
    figc.style.webkitTransform = `translateX(0%)`
    laptopi.style.opacity=0
    tableti.style.opacity=0
    mousei.style.opacity=0
    mousepi.style.opacity=0
    merchi.style.opacity=0
    bagi.style.opacity=0
    capi.style.opacity=0
    headseti.style.opacity=0
})

figClose.addEventListener("click", function(){
    figc.style.transform = `translateX(100%)`
    laptopi.style.opacity=1
    tableti.style.opacity=1
    mousei.style.opacity=1
    mousepi.style.opacity=1
    merchi.style.opacity=1
    bagi.style.opacity=1
    capi.style.opacity=1
    headseti.style.opacity=1
})


//laptop--------------------------------------------------------
var laptopc = document.querySelector(".page7 .laptop .content")
var laptopi = document.querySelector(".page7 .laptop img")
var laptopClose = document.querySelector(".page7 .laptop .close i")

laptopi.addEventListener("click", function(){
    laptopc.style.transform = `translateX(0%)`
    figi.style.opacity=0
    tableti.style.opacity=0
    mousei.style.opacity=0
    mousepi.style.opacity=0
    merchi.style.opacity=0
    bagi.style.opacity=0
    capi.style.opacity=0
    headseti.style.opacity=0
})

laptopClose.addEventListener("click", function(){
    laptopc.style.transform = `translateX(-100%)`
    figi.style.opacity=1
    tableti.style.opacity=1
    mousei.style.opacity=1
    mousepi.style.opacity=1
    merchi.style.opacity=1
    bagi.style.opacity=1
    capi.style.opacity=1
    headseti.style.opacity=1
})


//tablet--------------------------------------------------------
var tableti = document.querySelector(".page7 .tablet img")
var tabletc = document.querySelector(".page7 .tablet .content")
var tabletClose = document.querySelector(".page7 .tablet .close i")

tableti.addEventListener("click", function(){
    tabletc.style.transform = `translateX(0%)`
    laptopi.style.opacity=0
    figi.style.opacity=0
    mousei.style.opacity=0
    mousepi.style.opacity=0
    merchi.style.opacity=0
    bagi.style.opacity=0
    capi.style.opacity=0
    headseti.style.opacity=0
})

tabletClose.addEventListener("click", function(){
    tabletc.style.transform = `translateX(100%)`
    laptopi.style.opacity=1
    figi.style.opacity=1
    mousei.style.opacity=1
    mousepi.style.opacity=1
    merchi.style.opacity=1
    bagi.style.opacity=1
    capi.style.opacity=1
    headseti.style.opacity=1
})

//mouse--------------------------------------------------------
var mousei = document.querySelector(".page7 .mouse img")
var mousec = document.querySelector(".page7 .mouse .content")
var mouseClose = document.querySelector(".page7 .mouse .close i")

mousei.addEventListener("click", function(){
    mousec.style.transform = `translateX(0%)`
    laptopi.style.opacity=0
    tableti.style.opacity=0
    figi.style.opacity=0
    mousepi.style.opacity=0
    merchi.style.opacity=0
    bagi.style.opacity=0
    capi.style.opacity=0
    headseti.style.opacity=0
})

mouseClose.addEventListener("click", function(){
    mousec.style.transform = `translateX(100%)`
    laptopi.style.opacity=1
    tableti.style.opacity=1
    figi.style.opacity=1
    mousepi.style.opacity=1
    merchi.style.opacity=1
    bagi.style.opacity=1
    capi.style.opacity=1
    headseti.style.opacity=1
})


//mouse-pad---------------------------------------------------------
var mousepi = document.querySelector(".page7 .mouse-pad img")
var mousepc = document.querySelector(".page7 .mouse-pad .content")
var mousepClose = document.querySelector(".page7 .mouse-pad .close i")

mousepi.addEventListener("click", function(){
    mousepc.style.transform = `translateX(0%)`
    laptopi.style.opacity=0
    tableti.style.opacity=0
    mousei.style.opacity=0
    figi.style.opacity=0
    merchi.style.opacity=0
    bagi.style.opacity=0
    capi.style.opacity=0
    headseti.style.opacity=0
})

mousepClose.addEventListener("click", function(){
    mousepc.style.transform = `translateX(100%)`
    laptopi.style.opacity=1
    tableti.style.opacity=1
    mousei.style.opacity=1
    figi.style.opacity=1
    merchi.style.opacity=1
    bagi.style.opacity=1
    capi.style.opacity=1
    headseti.style.opacity=1
})


//merchandise----------------------------------------------------------
var merchi = document.querySelector(".page7 .merch img")
var merchc = document.querySelector(".page7 .merch .content")
var merchClose = document.querySelector(".page7 .merch .close i")

merchi.addEventListener("click", function(){
    merchc.style.transform = `translateX(0%)`
    laptopi.style.opacity=0
    tableti.style.opacity=0
    mousei.style.opacity=0
    mousepi.style.opacity=0
    figi.style.opacity=0
    bagi.style.opacity=0
    capi.style.opacity=0
    headseti.style.opacity=0
})

merchClose.addEventListener("click", function(){
    merchc.style.transform = `translateX(-100%)`
    laptopi.style.opacity=1
    tableti.style.opacity=1
    mousei.style.opacity=1
    mousepi.style.opacity=1
    figi.style.opacity=1
    bagi.style.opacity=1
    capi.style.opacity=1
    headseti.style.opacity=1
})

//bag------------------------------------------------------------
var bagi = document.querySelector(".page7 .bag img")
var bagc = document.querySelector(".page7 .bag .content")
var bagClose = document.querySelector(".page7 .bag .close i")

bagi.addEventListener("click", function(){
    bagc.style.transform = `translateX(0%)`
    laptopi.style.opacity=0
    tableti.style.opacity=0
    mousei.style.opacity=0
    mousepi.style.opacity=0
    merchi.style.opacity=0
    figi.style.opacity=0
    capi.style.opacity=0
    headseti.style.opacity=0
})

bagClose.addEventListener("click", function(){
    bagc.style.transform = `translateX(-100%)`
    laptopi.style.opacity=1
    tableti.style.opacity=1
    mousei.style.opacity=1
    mousepi.style.opacity=1
    merchi.style.opacity=1
    figi.style.opacity=1
    capi.style.opacity=1
    headseti.style.opacity=1
})

//cap------------------------------------------------------------
var capi = document.querySelector(".page7 .cap img")
var capc = document.querySelector(".page7 .cap .content")
var capClose = document.querySelector(".page7 .cap .close i")

capi.addEventListener("click", function(){
    capc.style.transform = `translateX(0%)`
    laptopi.style.opacity=0
    tableti.style.opacity=0
    mousei.style.opacity=0
    mousepi.style.opacity=0
    merchi.style.opacity=0
    bagi.style.opacity=0
    figi.style.opacity=0
    headseti.style.opacity=0
})

capClose.addEventListener("click", function(){
    capc.style.transform = `translateX(-100%)`
    laptopi.style.opacity=1
    tableti.style.opacity=1
    mousei.style.opacity=1
    mousepi.style.opacity=1
    merchi.style.opacity=1
    bagi.style.opacity=1
    figi.style.opacity=1
    headseti.style.opacity=1
})

//headsets------------------------------------------------------------
var headseti = document.querySelector(".page7 .headsets img")
var headsetc = document.querySelector(".page7 .headsets .content")
var headsetClose = document.querySelector(".page7 .headsets .close i")

headseti.addEventListener("click", function(){
    headsetc.style.transform = `translateX(0%)`
    laptopi.style.opacity=0
    tableti.style.opacity=0
    mousei.style.opacity=0
    mousepi.style.opacity=0
    merchi.style.opacity=0
    bagi.style.opacity=0
    capi.style.opacity=0
    figi.style.opacity=0
})

headsetClose.addEventListener("click", function(){
    headsetc.style.transform = `translateX(100%)`
    laptopi.style.opacity=1
    tableti.style.opacity=1
    mousei.style.opacity=1
    mousepi.style.opacity=1
    merchi.style.opacity=1
    bagi.style.opacity=1
    capi.style.opacity=1
    figi.style.opacity=1
})


gsap.from(".page7", {
    opacity: 0,
    duration : .5,
    scrollTrigger :{
        trigger : ".page7",
        scroller: "body",
        // markers : true,
        start :"top 85%"
    }
})


//subscribe button
var subscribeFace = document.querySelector(".subscribe .subscribe-face")
var subscribeBody = document.querySelector(".subscribe .subscribe-body")
var Close = document.querySelector(".subscribe-body>i")
var subscribeBar = document.querySelector(".subscribe-bar")

subscribeFace.addEventListener("click", function(){
    subscribeBody.style.transition = `all ease 0.5s`
    subscribeBody.style.transform = `translateX(0%)`
    subscribeBar.style.width = "80%"
})

Close.addEventListener("click", function(){
    subscribeBody.style.transform = `translateX(100%)`
    subscribeBar.style.width = "35%"
})