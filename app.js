// const crsr = document.querySelector(".cursor")
// const img = document.querySelectorAll(".img")
// const main = document.querySelector(".main")
// main.addEventListener("mousemove", (e)=>{
//     crsr.style.left = e.pageX +1+ "px"
//     crsr.style.top = e.pageY +1+ "px"
// })
// img.addEventListener("mouseenter", ()=>{
//     crsr.classList.add("active")
//     crsr.innerHTML = "Sound off"
// })
// img.addEventListener("mouseleave", ()=>{
//     crsr.classList.remove("active")
//     crsr.innerHTML = ""
// })

Shery.imageEffect(".images", {
    style: 1,
    /*optional parameters
    these parameter dose not applies to custom scroll trigger callback */
    scrollSnapping: true,
    scrollSpeed: 6,
    touchSpeed: 6,
    damping: 7,
    // debug: true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.6636363636363636},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":1.992818729327591},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });