jQuery(document).ready(function () {
    if (jQuery(window).width() < 991) {
        jQuery('.footer__block .footer__title').next().hide()
        jQuery('.footer__block .footer__title').click(function () {
            jQuery(this).toggleClass('less')
            jQuery(this).next().slideToggle(200)
        })
    }
})