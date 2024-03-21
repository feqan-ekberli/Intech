var accHeaders = document.querySelectorAll('.accordion_item  .head');

accHeaders.forEach(function (accHeader) {
    accHeader.addEventListener('click', function () {
        var accContent = this.nextElementSibling;

        accHeaders.forEach(function (header) {
            header.classList.remove('active');
        });

        var isActive = accContent.classList.contains('active');
        accHeaders.forEach(function (header) {
            header.nextElementSibling.classList.remove('active');
        });
        if (!isActive) {
            accContent.classList.add('active');
            this.classList.add('active');
        }
    });
});



var swiper = new Swiper(".our_services .slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".our_services .next_arrow",
        prevEl: ".our_services .prev_arrow",
    },

    breakpoints: {
        0: {
            slidesPerView: 1.15,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4.2,
            spaceBetween: 32,
        },
    },
});



document.querySelector(".site_header .toggle").addEventListener("click", function () {
    const div = document.querySelector(".site_header .navbar");
    div.classList.toggle("opened");

    const button = document.querySelector(".site_header .toggle");
    button.classList.toggle("opened");
});



// Show popup
document.querySelector(".site_header .login_btn").addEventListener("click", function () {
    const div = document.querySelector(".login_form");
    div.classList.toggle("active");
});

// Hide popup
document.querySelector(".popup .close_btn").addEventListener("click", function () {
    const div = document.querySelector(".login_form");
    div.classList.remove("active");
});





const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const year = document.querySelector(".current_year")
year.innerHTML = currentYear