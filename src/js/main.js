document.querySelector(".btn_login").onclick = function () {
    document.querySelector(".overlay").classList.add('overlay_active')
    document.querySelector(".popup__form_login").classList.add('active')
}

document.querySelector('.btn_signUp').onclick = function() {
    document.querySelector('.overlay').classList.add('overlay_active')
    document.querySelector('.popup__form_signup').classList.add('active')
}

document.querySelector(".popup__close").onclick = function () {
    document.querySelector(".overlay").classList.remove("overlay_active")
    document.querySelector('.popup__form_login').classList.remove("active")
    document.querySelector('.popup__form_signup').classList.remove("active")
}


document.querySelector(".tools__row-btn").onclick = function () {
    document.querySelector(".tools__row-btn").classList.toggle("active")
    if (document.querySelector(".tools__row-btn").classList.contains("active")){
        document.querySelector(".tools__row-btn").textContent = 'Hide'
    } else{
        document.querySelector(".tools__row-btn").textContent = 'Load more'
    }


    document.querySelectorAll(".tools___row_card-hide").forEach(function (card) {
        card.classList.toggle("active")
    })
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 150,
    speed: 200,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



document.querySelector('.burger').onclick = function () {
    document.querySelector('.burger').classList.toggle('burger_active')
    document.querySelector('.header__right').classList.toggle('header__right_active')
}