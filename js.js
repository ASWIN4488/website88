const timeline = gsap.timeline({default:{duration:0.5,opacity:0,ease:'Bounce.easeOut'}})
 timeline.from('body',{
    opacity:0
 }).from('.imgs',{
    opacity:0,
     y: "50px",
 }).from('.imgs',{
    opacity:0,
    y: "-100%",
})