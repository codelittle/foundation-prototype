$(document).ready(function() {
    $(document).foundation();

    // Transform any element that has data-url into a link
    $('[data-url]').click(function () {
        window.location = $(this).attr('data-url')
    });
    
});