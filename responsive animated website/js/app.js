$(document).ready(function(){

    $('.slider').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    let hamBurger = document.querySelector(".hamburger");

    let times = document.querySelector(".times");

    let mobileNav = document.querySelector(".mobile-nav");

    let navList = document.querySelector(".nav-list");


    hamBurger.addEventListener("click", function(){

        mobileNav.classList.add("open");

    });

    times.addEventListener("click", function(){

        mobileNav.classList.remove("open");

    });

    navList.addEventListener("click", function(){

        mobileNav.classList.remove("open");

    });

    // function toggle() {
    //     let mobileNav = document.querySelector(".mobile-nav");
    //     mobileNav.classlist.toggle("active");
    // };
    
});