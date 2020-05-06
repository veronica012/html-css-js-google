$(document).ready(function() {
    //intercettare il click sullicona del menu
    $('.fa-th').click(function() {
        var menu_visibile = $('.dropdown').toggle();
    });
    $('.privacy-bar-right a:first-child').click(function() {
        var privacy_bar_hidden = $('.privacy-bar').hide();
    });
});
