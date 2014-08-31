function resizeJumbotron() {    
    var jumbo = $('.jumbotron');
    var content = $('.content');
    var winH = $(window).height();
    var height = winH - parseInt($('body').css('padding-top'), 10);

    jumbo.css('height', height);
    content.css('margin-top', height);
}
resizeJumbotron();

$(document).ready(function() { 

    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            var $svg = jQuery(data).find('svg');

            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        });

    });
	
	$('.scroll-top').on('click', function() {
        var scrollPos = document.body.scrollTop;

		if (scrollPos !== 0) {
            $('html, body').animate({ scrollTop: 0 }, 850);
        }
		return false;
	});

	$('.scroll-to').on('click', function(e) {
	    var target = "#" + $(this).data('target');
	    $('html, body').animate({ scrollTop: $(target).offset().top }, 850);
	    return false;
	});

	$(window).resize(function() {
        resizeJumbotron();
    });

});