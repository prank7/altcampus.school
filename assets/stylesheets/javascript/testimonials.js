(function(){
    const wrapper = document.querySelector(".content-wrapper")
    const navRight = document.querySelector(".nav-right");
    const navLeft = document.querySelector(".nav-left");
    let activeIndex = 0;
    let elm = document.getElementById(`testimonial${activeIndex}`);
    // elm.style.transform = "translateX(0)";
    // elm.style.transition = "all 2s ease";
    elm.classList.add("active");

function handleNavRight(e) {

    let elm = document.getElementById(`testimonial${activeIndex}`);
    // elm.style.transform = "translateX(-100%)";
    // elm.style.transition =  "all 2s ease";
    elm.classList.remove("active");
    activeIndex += 1;
    activeIndex != 4 ? "" : activeIndex = 0;
    let nextElm = document.getElementById(`testimonial${activeIndex}`);
    // nextElm.style.transform = "translateX(0)";
    // nextElm.style.transition = "all 2s ease";
    nextElm.classList.add("active");
}
function handleNavLeft(e) {
    document.getElementById(`testimonial${activeIndex}`).classList.remove("active");
    activeIndex -= 1;
    activeIndex == -1 ? activeIndex = 3 : "";
    document.getElementById(`testimonial${activeIndex}`).classList.add("active");
}
navRight.addEventListener('click', handleNavRight);
navLeft.addEventListener('click', handleNavLeft);
})();