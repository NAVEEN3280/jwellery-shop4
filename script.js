var tl = gsap.timeline({scrollTrigger:{
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#j1",{
    top: "95%",
    left: "12%",
    rotate: "10deg"
}, 'gbag')
tl.to("#gbag",{
    top:"160%",
    left: "23%"
}, 'gbag')
tl.to("#gbar",{
    width: "25%",
    top:"160%",
    right: "10%",
    rotate: "-15deg"
}, 'gbag')
tl.to("#gcoin1",{
    top:"110%",
    rotate: "10deg",
    left: "70%"
}, 'gbag')
tl.to("#gcoin",{
    top:"110%",
    rotate: "10deg",
    left: "0%"
}, 'gbag')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to("#gbag",{
    width:"8%",
    left: "50%",
    top: "230%"
}, 'j1')
tl2.to("#gbar",{
    width:"10%",
    left: "25%",
    top: "270%"
}, 'j1')
tl2.to("#j1",{
    width:"30%",
    top: "250%",
    left: "35%",
    rotate: "0deg"
}, 'j1')

