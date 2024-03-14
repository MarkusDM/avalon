import Swiper from 'swiper';
import { remToPx } from '../utils/utils';
import { Navigation, Thumbs } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.brands')) {
        new Swiper('.brands-swiper', {
            modules: [Navigation],
            speed: 1200,
            navigation: {
                prevEl: '.brands__navigation .arrow-btn_prev',
                nextEl: '.brands__navigation .arrow-btn_next'
            },
            breakpoints: {
                0: {
                    slidesPerView: 'auto',
                    spaceBetween: remToPx(1.6),
                    centeredSlides: true,
                    loop: true
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: remToPx(2.8)
                }
            }
        });

        new Swiper('.brands-companies-swiper', {
            modules: [Navigation],
            speed: 1200,
            navigation: {
                prevEl: '.brands__companies-slider .arrow-btn_prev',
                nextEl: '.brands__companies-slider .arrow-btn_next'
            },
            breakpoints: {
                0: {
                    slidesPerView: 4,
                    spaceBetween: remToPx(4),
                    loop: true
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: remToPx(8)
                }
            }
        });
    }

    if (document.querySelector('.detailed')) {
        const detailedGalleryThumbs = new Swiper('.detailed-product-thumbs-swiper', {
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            spaceBetween: remToPx(2.8),
            speed: 1200,
            slideToClickedSlide: true
        });

        new Swiper('.detailed-product-gallery-swiper', {
            modules: [Thumbs, Navigation],
            speed: 1200,
            grabCursor: true,
            thumbs: {
                swiper: detailedGalleryThumbs
            },
            slidesPerView: 1,
            breakpoints: {
                0: {
                    spaceBetween: remToPx(3.2)
                },
                768: {
                    spaceBetween: remToPx(1.6)
                }
            }
        });
    }

    if (document.querySelector('.analogs')) {
        new Swiper('.analogs-swiper', {
            modules: [Navigation],
            speed: 1200,
            navigation: {
                prevEl: '.analogs__navigation .arrow-btn_prev',
                nextEl: '.analogs__navigation .arrow-btn_next'
            },
            breakpoints: {
                0: {
                    slidesPerView: 'auto',
                    spaceBetween: remToPx(1.6),
                    centeredSlides: true,
                    loop: true
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: remToPx(2.8)
                }
            }
        });
    }
});
