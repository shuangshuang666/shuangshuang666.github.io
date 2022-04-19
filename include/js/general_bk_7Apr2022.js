//Mobile Check
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
// for image linkage
var URL = location.href.toLowerCase();
var arr = URL.split('/');//arr[0]='example.com'

var originPath;
//if (location.href.toLowerCase().includes("http://beta.first2link.com")) {
if (location.href.toLowerCase().indexOf("http://artwork.creaworld.sg")> -1) {
    //arr[0] and arr[1] = http:// , arr[2] = beta.first2link.com, arr[3] = "project name"
    originPath = arr[0] + "/" + arr[1] + "/" + arr[2] + "/" + arr[3];
}
else {
    //arr[0] and arr[1] = http:// , arr[2] = project url
    originPath = arr[0] + "/" + arr[1] + "/" + arr[2];
}

// Display page active
$(document).ready(function(){    
     var str=location.href.toLowerCase();
	//Remember to replace the project's path name. Example http://beta.first2link.com/creaworld/, then remove /creaworld/
	var strpath = location.pathname.toLowerCase().replace('/statclean/','');
	$('#navmenu-h').addClass(strpath);
	
	 $('#navmenu-h li a, ul.topnav li a, ul.myaccount li a, footer li a, .logindrop_div ul li a').each(function () {
		var navlink = $(this).attr('href');
		 if (strpath == navlink)
	     {
			  $(this).parents('li').addClass("active");
		 }
    });

    if ($('.breadcrumb').length) {
        var activeLinks = [];
        var breadTotal = $('.breadcrumb a').length;
        $('.breadcrumb a').each(function (breadIndex) {
            if ($(this).attr('href') != '#' && $(this).attr('href') != '/' && $(this).attr('href') != 'javascript:void(0)' && $(this).text().toLowerCase() != 'home') {
                activeLinks.push($(this).attr('href'));
            }
        });

        // Check if navigation has the link belonging to the array, if yes, add active to parent li
        $('#navmenu-h li').each(function () {
            if ($.inArray($(this).find('a').attr('href'), activeLinks) >= 0) {
                if ($(this).find('a').text().toLowerCase() != "overview" && $(this).find('a').attr('href') != "/products")
                    $(this).children('a').parents('li').addClass('active');
            }
        });
     }

	//Search
	if($('.search_icon').length){
	$('body, html, a.closesearch, #overlay').click(function(){		
		$('.search_icon, #search, #overlay, #menu').removeClass('active');
		$('body,html').removeClass('overflow-hidden');
		$('#navmenu-h').removeAttr('style');
	});
	
	$('.search_icon').click(function(e){
		$(this).toggleClass('active');
		$('#search').toggleClass('active');
		$('#menu').removeClass('active');
		$('#navmenu-h').removeAttr('style');
		$('body,html').removeClass('overflow-hidden');
		
		if($(window).width() < 421){
			$('body,html').toggleClass('overflow-hidden');
			$('header').removeClass('smaller');
		}
		e.stopPropagation();
	});
	
	$('#search').click(function(e){
		e.stopPropagation();
	});
  } 
     
	 $('.spinner-wrap .add-btn').click(function (e) {
		e.preventDefault();		
		var th = $(this).closest('.spinner-wrap').find('.addcart-btn');    	
		th.val(+th.val() + 1);
	  });
	  $('.spinner-wrap .minus-btn').click(function (e) {
		  e.preventDefault();		
		var th = $(this).closest('.spinner-wrap').find('.addcart-btn');    	
			  if (th.val() > 1) th.val(+th.val() - 1);
	  });
  
	var minimized_elements = $('.desc-long p');
		minimized_elements.each(function(){  
		  
			var t = $(this).text();     
		
		if($(window).width() < 992){
			if(t.length < 80) return;		
			 $(this).html(
			 t.slice(0,80)+'<span>...</span>'
			);
		} 
		else {
			if(t.length < 140) return;		
			 $(this).html(
			 t.slice(0,140)+'<span>...</span>'
			 );
		}			 
	});
	//Menu
	if($('#menu').length){
		if($(window).width() <= 991){
			$('#menu').slinky({ speed : 600, selector: '#navmenu-h' });
		}
		$( window ).resize(function() {
			//if window width is smaller or equals to 
			if($(window).width() <= 991){
				if(!($('#navmenu-h').find('li.header').length)){
					$('#menu').slinky({ speed : 600, selector: '#navmenu-h' });
				}
				
				if($('#navmenu-h').find('a.nextt')){
					$('#navmenu-h').find('a.nextt').removeClass('nextt').addClass('next');
				}
			}
			else {
				$('#navmenu-h').removeAttr('style');
				$('#navmenu-h').find('ul').removeAttr('style').removeClass('showSlink');
				$('#menu').removeClass('active').height('auto');
				$('#overlay').removeClass('active');
				$('#navmenu-h').find('a.next').removeClass('next').addClass('nextt');
			}
		});
		
		//clicking on body,html or overlay will close the menu
		$('body, html, #overlay').click(function(){
			$('.search_icon, #search, #overlay, #menu').removeClass('active');
			$('#overlay, #menu').removeClass('active');
			$('#navmenu-h').removeAttr('style');
			$('body,html').removeClass('overflow-hidden');
			$('#navmenu-h').find('ul').removeClass('showSlink');
		});
		
		//making sure menu and the menu icon won't be affected by the code above
		$('#menu, .menu_toggle').click(function(e){
			e.stopPropagation();
		});
		
		//when menu icon or close icon clicked, toggle the visibility and the overflow of body/html
		$('.menu_toggle, .menu_close').click(function(){
			$('#menu, #overlay').toggleClass('active');
			$('.search_icon').removeClass('active');
			$('#search').removeClass('active');
			$('#navmenu-h').find('ul').removeClass('showSlink');
			
			if(!$('#menu').hasClass('active')){
				$('#navmenu-h').removeAttr('style');
			}
			
			$('body,html').toggleClass('overflow-hidden');
		});
		$('#menu #navmenu-h li ul li > a').click(function(){
			  $('#menu').animate({
		   scrollTop : 0  
		 }, 0);
		});
	}	
	if($('#sidenav-wrapper').length){
		$('body, html, #overlay').click(function(){
			$('#overlay, #sidenav-wrapper').removeClass('active');
			$('#sidenav').removeAttr('style');
			$('body,html').removeClass('overflow-hidden');
			$('#sidenav').find('ul').removeClass('showSlink');
		});

		$('#sidenav-wrapper, .sidenav_toggle').click(function(e){
			e.stopPropagation();
		});
		
		$('.sidenav_toggle, .sidenav_close').click(function(){
			$('#sidenav-wrapper, #overlay').toggleClass('active');		
			$('#sidenav').find('ul').removeClass('showSlink');
			
			if(!$('#sidenav-wrapper').hasClass('active')){
				$('#sidenav').removeAttr('style');
			}
			
			$('body,html').toggleClass('overflow-hidden');
		});
	} 

	/**ACCORDION FOR CONTENT **/
	  if($('.accordion-title').length){		
	  $('.accordion-title').click(function(){
		  if(!$(this).hasClass('active')){
			  $('.accordion-title.active').removeClass('active').next('.accordion-content').slideToggle(300);
			  $(this).toggleClass('active');
			  $(this).next('.accordion-content').slideToggle(300);
		  }
		  else if($('.accordion-title.active').length > 1 || $(this).hasClass('active')){
			  $(this).toggleClass('active');
			  $(this).next('.accordion-content').slideToggle(300);
		  }				 
	  });		
	  }	
	  
	  //display view
	if($('.display_icons_btn').length){
		$('.display_icons_btn').click(function(){
			$('.display_icons_btn').removeClass('active');
			$(this).addClass('active');
			
			if($(this).hasClass('icon_list')){
				$('.prod_grid').removeClass('active');
				$('.prod_list, .prod_view').addClass('active');
			}
			else {
				$('.prod_grid').addClass('active');
				$('.prod_list, .prod_view').removeClass('active');
			}
		});
	}
	
	if($('.btn').length){
		$('.btn').click(function(){
			$('.display_icons_btn').removeClass('active');
			$('.prod_grid').addClass('active');
			$('.prod_list, .prod_view').removeClass('active');
			$('.icon_grid').addClass('active');
		});
	}
	
    $('.toggle').click(function(){
		$('.nav_wrapper, .nav_overlay').toggleClass('active');
		
		if($('.nav_wrapper').hasClass('active')){
			$('body').css('overflow','hidden');	
		}
		else{
			$('body').css('overflow','');
		}
	});
	
		
	$('.nav_overlay').click(function(){
		$('.nav_wrapper, .nav_overlay').toggleClass('active');
		$('body').css('overflow','');
	});
	
	$('body').css('padding-bottom', $('footer').outerHeight() +'px');
	//on resize footer height change, so we must apply the difference to body's padding-bottom		
	$(window).resize(function(){
		$('body').css('padding-bottom', $('footer').outerHeight() +'px');
	});
		
	
	//sidenavigation
	if ($('.topnav').length) {
		var topNavLinks = [];
		var topNav = $('.topnav a').length;
		$(".topnav").accordion({
		  accordion: true,
		  speed: 500,
		  closedSign: '<img src="' + originPath + '/images/arrow-down.svg"/>',
	      openedSign: '<img src="' + originPath + '/images/arrow-up.svg"/>'
		});
		$('.topnav > li > a').click(function() {
		  if ($(this).parents('li').hasClass('active')) {
			$(this).parents('li').removeClass('active');
		  } else {
			$('.topnav li.active').removeClass('active');
			$(this).parents('li').addClass('active');
		  }
		});		
    }    
	
	//MY PROFILE DROPDOWN
    if($('.logindrop_wrapper').length){
		if($(window).width() > 767){
			$('.logindrop_wrapper > a').click(function(e){
				e.preventDefault();
			});
			$('.logindrop_wrapper').hoverIntent({
				sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)    
				interval: 0,  // number = milliseconds for onMouseOver polling interval    
				timeout: 300,   // number = milliseconds delay before onMouseOut    
				over:function(){
					$(this).children('.logindrop_div').slideDown(300);					
				},
				out: function(){
					$(this).children('.logindrop_div').slideUp(0);
				}
			});
		}		
	}

		//My Account - Overview
	if($('.togBtn').length){
		$('.togBtn').click(function(){			
			$('.form_tog').slideToggle();			
			$('.form_tog2').attr('style','display:block');
			$('.form_tog2.profile_email').attr('style','display:none');
		});
	}

    //My Account - Overview
	if($('.togBtn2').length){
		$('.togBtn2').click(function(){			
			$('.form_tog2').slideToggle();			
			$('.form_tog').attr('style','display:block');
			$('.form_tog.profile_form').attr('style','display:none');	
		});
	}
	
	if($('.load-more').length){
	 $('.load-more').jscroll({
	   loadingHtml: '<img src="' + originPath + '/images/loading.gif"/>',
	   autoTrigger: false
	 });
	}	
	
	if ($('.proddet_imgwrapper').length) {
	  setTimeout(function () {
		  $('.proddet_img').on('afterChange', function () {						
				  var activeImg = $(this).find('.slick-active').find('img');
						
		  }).slick({
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: false,
				  fade: true,
				  dots: false,			     
				  asNavFor: '.proddet_imgnav',
				  infinite: false
		  });                                             
	     if($(window).width() > 767){
				$('.proddet_imgnav').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.proddet_img',
					dots: false,
					arrows: true,
					focusOnSelect: true,
					vertical: true,
					centerPadding: '0',					
					infinite: false,
  					speed: 300,
					centerMode: false,
					responsive: [{
						breakpoint: 768,
						settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						asNavFor: '.proddet_img',
						dots: false,
						arrows: true,
						focusOnSelect: true,
						vertical: false,
						infinite: false,
						centerMode: false,
						verticalSwiping: false,
						useTransform: false
					  }
					} 
                    ]
				});	
			}
			else {
				$('.proddet_imgnav').slick({
				    slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.proddet_img',
					dots: false,
					arrows: true,
					focusOnSelect: true,
					vertical: true,
					infinite: false,
                    responsive: [
					{
					  breakpoint: 768,
					  settings: {
					  slidesToShow: 3,
					  slidesToScroll: 1,
					  asNavFor: '.proddet_img',
					  dots: true,
					  arrows: true,
					  focusOnSelect: true,
					  vertical: false,
					  infinite: false,
						verticalSwiping: false
					  }
					} 
                    ]
				});		
			}
		});
	}

	var sliderctr = 0;
	$('.proddet_imgnav .proddet_thumb').each(function(){ 
		sliderctr++;
		$(this).parents('.proddet_imgnav').attr('value', sliderctr);
	});	
	$('.proddet_imgnav .proddet_thumb').each(function(){	
		var slidevalue = $('.proddet_imgnav').attr('value');
		if($(window).width() < 768){
        if(slidevalue >= 3)
		{$(this).parents('.proddet_imgnav').addClass('morethan4'); 
         $('.proddet_imgnav').slick({
                    slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.proddet_img',
					dots: false,
					arrows: true,
					focusOnSelect: true,
					vertical: true,
					infinite: false,
                    responsive: [
					{
					  breakpoint: 768,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						asNavFor: '.proddet_img',
						focusOnSelect: true,
						centerMode: false,
						infinite: false,
						vertical: false,
						verticalSwiping: false
					  }
					}
                    ]
		 });	
        
        }
		else
		{ $(this).parents('.proddet_imgnav').addClass('lowerthan4')
          $('.proddet_imgnav').slick({
                    slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.proddet_img',
					dots: false,
					arrows: true,
					focusOnSelect: true,
					vertical: true,
					infinite: false,
                    responsive: [
					{
					  breakpoint: 768,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
		                asNavFor: '.proddet_img',
		                dots: false,
                        arrows: true,
		                focusOnSelect: true,
		                infinite: false,
		                vertical: false,
		                verticalSwiping: false,
                       centermode:false
					  }
					} 
                    ]
		  
		 });        
        }
        }
        else 
        { 
        if(slidevalue > 4)
		{$(this).parents('.proddet_imgnav').addClass('morethan4'); }
		else
		{ $(this).parents('.proddet_imgnav').addClass('lowerthan4')}
        }
	});	
	
	 //On click show password
    if ($('.passwordShowHide').length) {
    $('.passwordShowHide').click(function () {
	  $(this).toggleClass("fa-eye fa-eye-slash");
	  if ($(this).prev().attr('type') === 'password') {
		  $(this).prev().attr('type', 'text');
		  $(this).addClass('active');
	  }
	  else {
		  $(this).prev().attr('type', 'password');
		  $(this).removeClass('active');
	  }
     });
     }
});

$(window).on('load', function(){
//on resize footer height change, so we must apply the difference to body's padding-bottom	
$('body').css('padding-bottom', $('footer').outerHeight() +'px');
});


// Scroll to top
$(function () {
	$.scrollUp({
		scrollDistance: 10,         // Distance from top/bottom before showing element (px)
		scrollFrom: 'top',           // 'top' or 'bottom'
		scrollSpeed: 400,            // Speed back to top (ms)
		easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
		animation: 'fade',           // Fade, slide, none  ïƒ  Buttonâ€™s transition
		animationSpeed: 400,         // Animation speed (ms)
		scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
		scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
		scrollText: '', // Text for element, can contain HTML
		scrollTitle: false,          // Set a custom <a> title if required.
		scrollImg: false,            // Set true to use image
		activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		zIndex: 999,          // Z-Index for the overlay
		scrollImg: {
			active: true,
			type: 'background',
			src: originPath + '/images/top.svg'
		}
	});
});

function MM_goToURL() {
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}


$('.lists2').slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [{
      breakpoint: 768,
      settings: {
		slidesToShow: 5,
        slidesToScroll: 5
      }
    },{
      breakpoint: 500,
      settings: {
		slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]  
});