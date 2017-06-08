$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$(function() {
    var menuOffset = $('#menu').offset().top;
    var fixedMenu = function(){
        var st = $(window).scrollTop();
        if (st > menuOffset) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }  
    };

    fixedMenu();
    $(window).scroll(function() {
         fixedMenu();
    });

});
