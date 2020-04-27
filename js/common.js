$(document).ready(function () {
    $('.nav-link').on('click', function () {
        let category = $(this).attr('href');
        let target = $('#main-content').find(category);
        if (target.length > 0) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 100
            }, 1000);
        }
    });
});
