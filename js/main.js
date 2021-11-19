//  show search
$(document).ready(function() {
    $('.sb-icon-search').click(function() {
        if($('#sb-search').hasClass('sb-search-open')) {
            $('#sb-search').removeClass('sb-search-open')
        }else {
            $('#sb-search').addClass('sb-search-open')
        };
    });
});
// end show search
// show menu mobile
$(document).ready(function() {
	$(".nav-item__mb").click(function() {
		if($('.slide-menu-mb').hasClass('open')) {
			$('.slide-menu-mb').removeClass('open')
		}else {
			$('.slide-menu-mb').addClass('open')
		};
	});
	$(".icon-menu__close").click(function() {
		$('.slide-menu-mb').removeClass('open')
	});
	$(".nav-search__mb").click(function() {
		if($('.slide-menu-mb').hasClass('open')) {
			$('.slide-menu-mb').removeClass('open')
		}else {
			$('.slide-menu-mb').addClass('open')
		};
	});
});
// end show menu mobile
// scrollTop
$(document).ready(function() {
	var scrollTop = $('.scrollTop');
	$(window).scroll(function(){
		var topPos = $(this).scrollTop();
		if (topPos > 500) {
			$(scrollTop).css('opacity' , '1');
		} else {
			$(scrollTop).css({'opacity' : '0'});
		}
	});
});
$('.scrollTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
// end scrollTop
