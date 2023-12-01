let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

const nav = document.querySelector(".nav-items")
const open = document.getElementById("open")
const close = document.getElementById("close")

open.addEventListener("click", () =>{
    nav.style.display="flex";
    nav.style.top="0%";
})

close.addEventListener("click", () =>{
    nav.style.top="-110%";
})


const trailer = document.getElementById("first")
trailer.addEventListener("click", () =>{
    window.location = "breaking-bad.html"
    // window.focus();
})

// console.log(setid.attributes)
// const setid = document.getElementsByClassName(".cards")[0]
// console.log(setid.attributes)
// setid.setAttribute("id","watch")



/* ------------------------------- To watch a Trailer ------------------------------- */


const toWatchtrailer = document.getElementById("toWatch")
// console.log(toWatchtrailer);
toWatchtrailer.addEventListener("click", () => {
    window.location = "https://www.youtube.com/watch?v=1JLUn2DFW4w/autoplay"
    // window.focus();
})