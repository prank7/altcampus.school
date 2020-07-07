let navBarLink = document.querySelectorAll(".nav-link");
let navBarItem = navBarLink.forEach(elm => elm.addEventListener('click', () => {
    elm.classList.add('active');
}))