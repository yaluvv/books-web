const slides = document.querySelectorAll('.slider__slide')
const dots = document.querySelectorAll('.slider__dot')
const sliderNext = document.querySelector('.slider__next')
const burgerOpen = document.querySelector('.menu-open')
const burgerClose = document.querySelector('.menu-close')
const navMenu = document.querySelector('.header__nav')
const btnPopupOpen = document.querySelectorAll('#btn-popup')
const btnPopupClose = document.querySelector('.popup__close-btn')
const popup = document.querySelector('.popup')

let index = 0


const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('slider__slide_active')
    }
    slides[n].classList.add('slider__slide_active')
}
const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('slider__dot_active')
    }
    dots[n].classList.add('slider__dot_active')
}
const prepareCurrentSlide = ind => {
    activeSlide(index)
    activeDot(index)
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0
        prepareCurrentSlide(index)
    } else {
        index++
        prepareCurrentSlide(index)
    }
}
const prevSlide = () => {
    if (index == 0) {
        index == slides.length - 1
        prepareCurrentSlide(index)
    } else {
        index--
        prepareCurrentSlide(index)
    }
}
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index)
    })
})

setInterval(nextSlide, 5000)

burgerOpen.addEventListener('click', () => {
    navMenu.classList.add('header__nav--active')
    burgerClose.classList.add('menu-close--active')
})
burgerClose.addEventListener('click', () => {
    navMenu.classList.remove('header__nav--active')
    burgerClose.classList.remove('menu-close--active')
})

btnPopupOpen.forEach(btn => {
    btn.addEventListener('click', () => {
        popup.classList.toggle('popup--active')
    })
})


btnPopupClose.addEventListener('click', () => {
    popup.classList.remove('popup--active')
})