jQuery(document).ready(function () {
    jQuery('body').addClass('show-lightbox')
})

jQuery('.lightbox-newsletter__close, .lightbox-newsletter__mask').click(function () {
    jQuery('body').removeClass('show-lightbox')
})