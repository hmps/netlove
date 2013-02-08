(function( $ ){

    $('#nextTemplate').on('click', function() {
        var current = Number($('#slide-index').val()),
            next    = Number($('#slide-index').val())+1;
        $('.slider-item:nth-of-type('+next+')').css('position', 'relative').animate({left: '0px'}, 600, function(){ $('#slide-index').val(next); });
        $('.slider-item:nth-of-type('+current+')').css('position', 'absolute').animate({marginLeft: '-110%'}, 600, function(){ $(this).css('position', 'absolute') });

        if( next >= $('.slider-item').size() ) { $('#nextTemplate').fadeOut(); }
        if( next > 1 ) { $('#prevTemplate').fadeIn(); }
    });

    $('#prevTemplate').on('click', function() {
        var current = Number($('#slide-index').val()),
            prev    = Number($('#slide-index').val())-1;

           console.log(prev);
        $('.slider-item:nth-of-type('+prev+')').css('position', 'relative').animate({marginLeft: '0'}, 600, function(){ $('#slide-index').val(prev); });
        $('.slider-item:nth-of-type('+current+')').css('position', 'absolute').animate({left: '110%'}, 600, function(){ $(this).css('position', 'absolute') });

        if( prev <= 1 ) { $('#prevTemplate').fadeOut(); }
        if( prev < $('.slider-item').size() ) { $('#nextTemplate').fadeIn(); }
    });
})( jQuery );