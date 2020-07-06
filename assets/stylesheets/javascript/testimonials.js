(function(){
    const wrapper = document.querySelector(".content-wrapper")
    const navRight = document.querySelector(".nav-right");
    const navLeft = document.querySelector(".nav-left");
    let activeIndex = 0;
    let elm = document.getElementById(`testimonial${activeIndex}`);
    // elm.style.transform = "translateX(0)";
    // elm.style.transition = "all 2s ease";
    elm.classList.add("active");
    // elm.classList.add("inactive");


function handleNavRight(e) {

    let elm = document.getElementById(`testimonial${activeIndex}`);
    elm.classList.remove("active");
    // elm.classList.remove("inactive");
    activeIndex += 1;
    activeIndex != 4 ? "" : activeIndex = 0;
    let nextElm = document.getElementById(`testimonial${activeIndex}`);
    nextElm.classList.add("active");
    // nextElm.classList.add("inactive");
}
function handleNavLeft(e) {
    document.getElementById(`testimonial${activeIndex}`).classList.remove("active");
    // document.getElementById(`testimonial${activeIndex}`).classList.remove("inactive");
    activeIndex -= 1;
    activeIndex == -1 ? activeIndex = 3 : "";
    document.getElementById(`testimonial${activeIndex}`).classList.add("active");
    // document.getElementById(`testimonial${activeIndex}`).classList.add("inactive");
}
navRight.addEventListener('click', handleNavRight);
navLeft.addEventListener('click', handleNavLeft);
})();