$( window ).on("load", function() {
    $('#navbar-alert-close-button').on('click', function(e) {
        e.preventDefault();

        $('.navbar-alert').fadeOut('fast',function(){
            $(this).remove();
            $('body').removeClass('navbar-alert-fixed');

            //set cookie
            var d = new Date;
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 7);
            document.cookie = 'barra-aviso' + "=" + true + ";path=/;expires=" + d.toGMTString();
        });
    });
});