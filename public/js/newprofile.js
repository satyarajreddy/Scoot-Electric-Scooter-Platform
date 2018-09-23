$(document).ready(function () {
    $('.d-menu').hide();
    $('.dropdown').click(function (e) {
        $(this).children('.d-menu').toggle();
        e.stopPropagation();
        e.preventDefault();
    })
})