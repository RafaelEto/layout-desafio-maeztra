jQuery(document).ready(function () {
    if(jQuery(window).width() < 991) {
        jQuery('.header__search--icon').click(function () {
            jQuery('.header__search').toggleClass('show')
        })
    }
})