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
        // document.getElementById('mainvid').pause();
        document.getElementById('mainvid').style.opacity=0.5;
    }
    else{
        document.getElementById('mainvid').style.opacity=0.8;
        // document.getElementById('mainvid').play();
        document.getElementById('cur').innerHTML="<h2>MEDITATE NOW</h2>";
        content.removeChild(contains);
    }

    

    // console.log("click")
    // window.open("https://youtu.be/ijfLsKg8jFY?si=DYvJYZznOmPZX3C1","_blank");
})
    
}
forpage1();
