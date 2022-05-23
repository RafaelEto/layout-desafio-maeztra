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