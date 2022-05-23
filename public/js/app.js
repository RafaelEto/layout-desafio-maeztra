if (jQuery('.banner').length > 0) {
    jQuery('.banner .banner__list').slick({
        mobileFirst: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: `<button aria-label="prev" type="button" class="slick-prev">
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="#353535"/>
            </svg>
        </button>`,
        nextArrow: `<button aria-label="next" type="button" class="slick-next">
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z" fill="#353535"/>
            </svg>
        </button>`,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]   
    });
}
if (jQuery(window).width() < 1600) {
    jQuery('.brands__list').slick({
        mobileFirst: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    centerPadding: '30px'
                }
            }
        ]   
    });
}
jQuery(document).ready(function () {
    if (jQuery(window).width() < 991) {
        jQuery('.footer__block .footer__title').next().hide()
        jQuery('.footer__block .footer__title').click(function () {
            jQuery(this).toggleClass('less')
            jQuery(this).next().slideToggle(200)
        })
    }
})
jQuery(document).ready(function () {
    if(jQuery(window).width() < 991) {
        jQuery('.header__search--icon').click(function () {
            jQuery('.header__search').toggleClass('show')
        })
    }
})
jQuery(document).ready(function () {
    jQuery('body').addClass('show-lightbox')
})

jQuery('.lightbox-newsletter__close, .lightbox-newsletter__mask').click(function () {
    jQuery('body').removeClass('show-lightbox')
})
if (jQuery(window).width() < 1500) {
    jQuery('.rulers__list').slick({
        mobileFirst: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    centerPadding: '30px'
                }
            }
        ]   
    });
}
jQuery('.product').each(function () {
    jQuery(this).find('.button__buy').click(function() {
        jQuery(this).html('Produto Adicionado')
        setTimeout(() => {
            jQuery(this).html('Adicionar');
        }, 3000);
    })
})

jQuery('.variants__list').each(function () {
    jQuery(this).find('.variants__item:first-child div').addClass('selected')
})

jQuery('.variants__item').click(function () {
    jQuery(this).siblings().find('div').removeClass('selected')
    jQuery(this).find('div').addClass('selected')
})

 if(jQuery('.showcase__list').length > 0) {
    jQuery('.showcase__list').slick( {
        mobileFirst: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: `<button aria-label="prev" type="button" class="slick-prev">
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="black"/>
            </svg>
        </button>`,
        nextArrow: `<button aria-label="prev" type="button" class="slick-next">
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z" fill="black"/>
            </svg>
        </button>`,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4   
                }
            }
        ]   
    });
}
