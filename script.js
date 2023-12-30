function gsapAndST() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
gsapAndST();


function forpage1() {
    
var content = document.querySelector(".page1-content");
var cursor =  document.querySelector(".cursor");

content.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    }) 
})

content.addEventListener("mouseenter",(dets)=>{
    gsap.to(cursor,{
        opacity : 1,
        scale : 1
    })
})

content.addEventListener("mouseleave",(dets)=>{
    gsap.to(cursor,{
        opacity : 0,
        scale : 0
    })
})

content.addEventListener("click",()=>{
    let contains = document.getElementById('popup');
    console.log(contains);
    let newdiv = document.createElement("div")
    if(contains==null){
        newdiv.classList.add("popup");
        newdiv.setAttribute('id' , 'popup')
        newdiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/lh4JdZTJe7k?si=5xzzCKGEP61Ewr0w" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        content.append(newdiv);
        document.getElementById('cur').innerHTML="<h2>click to close</h2>";
        document.getElementById('mainvid').pause();
        document.getElementById('mainvid').style.opacity=0.5;
    }
    else{
        document.getElementById('mainvid').style.opacity=0.8;
        document.getElementById('mainvid').play();
        document.getElementById('cur').innerHTML="<h2>MEDITATE NOW</h2>";
        content.removeChild(contains);
    }

    

    // console.log("click")
    // window.open("https://youtu.be/ijfLsKg8jFY?si=DYvJYZznOmPZX3C1","_blank");
})
    
}
forpage1();

function page2animation() {
    gsap.from(".page2-content-text p ",{
        y:120,
        opacity:0,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
            start:"top 30%",
            end:"top 27%",
            // markers:true,
            scrub:2
        }
    })
    gsap.from(".page2-content-img img",{
        x:120,
        opacity:0,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
            start:"top 25%",
            end:"top 23%",
            // markers:true,
            scrub:2
        }
    })
}

page2animation();






var tl = gsap.timeline();
tl.from(".loader  h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to(".loader  h3",{
    x:-40,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to(".loader",{
    opacity:0
})

tl.to(".loader",{
    display:"none"
})
tl.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.12,
    // delay:0.5
})