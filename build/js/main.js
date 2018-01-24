
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-works-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin: 100,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });
    // Add smooth scrolling to Menu links
    $(".main-menu li a, .smooth").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top - (-10)
            }, 600, function(){
             
                window.location.hash = hash;
            });
        } 
    });

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }); 
    
    $(window).on("scroll", function(event) {
        Scroll();
    }); 
    
    $('.navbar-nav li a').on("click", function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top -50}, 1000);
        return false;
    });
    
    // User define function
    function Scroll() {
        var contentTop      =   [];
        var contentBottom   =   [];
        var winTop      =   $(window).scrollTop();
        var rangeTop    =   200;
        var rangeBottom =   500;
        $('.navbar-nav').find('.scroll a').each(function(){
            contentTop.push( $( $(this).attr('href') ).offset().top);
            contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
        })
        $.each( contentTop, function(i){
            if ( winTop > contentTop[i] - rangeTop ){
                $('.navbar-nav li.scroll')
                .removeClass('active')
                .eq(i).addClass('active');          
            }
        })
    
    };

 });

 
