$(document).ready(function() {
    $('[data-toggle="offcanvas"]').click(function() {
        $('#offcanvasSidebar').toggleClass('show');
    });

    $('.close').click(function() {
        $('#offcanvasSidebar').removeClass('show');
    });
});
