$(document).ready(function(){
$('#slickImageVideo').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,           
  infinite: true,
  autoplaySpeed:4000,
  autoplay: true,
  lazyLoad:"progressive",
  speed:600,
  cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
});
$('#slickImageVideo').show();
$('#slickImageVideo .slick-slide').each(function () {
  if(window.mobilecheck() == false) {
    if($(window).width() > 767) {
      if($(this).hasClass('image'))
      { var varmobile = $(this).find('.desktopbanner').attr('value');
        $( "<img src='" + varmobile + "' class='mb-3'>" ).insertBefore( $(this).find(".slickCaptionDiv" ) );
      }
      else if($(this).hasClass('youtube')) 
      { var varmobile = $(this).find('.youlink').attr('value');
        $('<iframe class="embed-player slide-media" width="100%" height="100%" src="https://www.youtube.com/embed/' + varmobile + ' ?enablejsapi=1&controls=0&fs=0&iv_load_policy=3&autoplay=1&rel=0&showinfo=0&loop=1&playlist=' + varmobile + '&start=1" frameborder="0" allowfullscreen></iframe>').insertBefore( $(this).find(".youtubelink" ) );
      }
      else if($(this).hasClass('video')) 
      {var varmobile = $(this).find('.youlink').attr('value');
       var varmobile2 = $(this).find('.mobilebanner').attr('value');  
        $('<video class="slide-video slide-media" loop muted preload="metadata" poster="' + varmobile2 + '"><source src="' + varmobile + '" type="video/mp4"></video>').insertAfter( $(this).find(".mobilebanner" ) );
      }
      else if($(this).hasClass('vimeo')) 
      { var varmobile = $(this).find('.youlink').attr('value');
        $('<iframe class="embed-player slide-media" width="100%" height="100%" src="https://player.vimeo.com/video/' + varmobile + '?api=1&byline=0&portrait=0&title=0&background=1&mute=1&loop=1&autoplay=0&id=' + varmobile + '&start=1" frameborder="0" ebkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').insertAfter( $(this).find(".mobilebanner" ) );
      }
    }
    else
    {
      var varmobile = $(this).find('.mobilebanner').attr('value');
      if($(this).hasClass('image')) {
        $( "<img src='" + varmobile + "'>" ).insertBefore( $(this).find(".slickCaptionDiv" ) );
      }  
      else {
      $( "<img src='" + varmobile + "' style='height:100%;width: 100%;object-fit:cover;'>" ).insertBefore( $(this).find(".mobilebanner" ) );
      }
    }
  }
  else
  { 
    $(this).find('img').remove();
    $(this).find('video').remove();
    $(this).find('iframe').remove();
    var varmobile = $(this).find('.mobilebanner').attr('value');
    if($(this).hasClass('image')) {
      $( "<img src='" + varmobile + "'>" ).insertBefore( $(this).find(".slickCaptionDiv" ) );
    }  
    else {
    $( "<img src='" + varmobile + "' style='height:100%;width: 100%;object-fit:cover;'>" ).insertBefore( $(this).find(".mobilebanner" ) );
    }
  }
});
});

$(window).resize(function(){
 $('.proddet_img').on('setPosition', function (event, slick) {
  var he =  slick.$slideTrack.height();
  he = he - 20;
   $('.youtubebox').css('height', he + 'px');
   $('#slickImageVideo .videobox').css('height', he + 'px');
});  
$('#slickImageVideo .slick-slide').each(function () {
  if($(window).width() > 767) {
      $(this).find('img').remove();
      $(this).find('video').remove();
      $(this).find('iframe').remove();
      if($(this).hasClass('image'))
      { var varmobile = $(this).find('.desktopbanner').attr('value');
        $( "<img src='" + varmobile + "' class='mb-3'>" ).insertBefore( $(this).find(".slickCaptionDiv" ) );
      }
      else if($(this).hasClass('youtube')) 
      { var varmobile = $(this).find('.youlink').attr('value');
        $('<iframe class="embed-player slide-media" width="100%" height="100%" src="https://www.youtube.com/embed/' + varmobile + ' ?enablejsapi=1&controls=0&fs=0&iv_load_policy=3&autoplay=1&rel=0&showinfo=0&loop=1&playlist=' + varmobile + '&start=1" frameborder="0" allowfullscreen></iframe>').insertBefore( $(this).find(".youtubelink" ) );
      }
      else if($(this).hasClass('video')) 
      {var varmobile = $(this).find('.youlink').attr('value');
       var varmobile2 = $(this).find('.mobilebanner').attr('value');  
        $('<video class="slide-video slide-media" loop muted preload="metadata" poster="' + varmobile2 + '"><source src="' + varmobile + '" type="video/mp4"></video>').insertAfter( $(this).find(".mobilebanner" ) );
      }
      else if($(this).hasClass('vimeo')) 
      { var varmobile = $(this).find('.youlink').attr('value');
        $('<iframe class="embed-player slide-media" width="100%" height="100%" src="https://player.vimeo.com/video/' + varmobile + '?api=1&byline=0&portrait=0&title=0&background=1&mute=1&loop=1&autoplay=0&id=' + varmobile + '&start=1" frameborder="0" ebkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').insertAfter( $(this).find(".mobilebanner" ) );
      }
    }
    else
    {
      $(this).find('img').remove();
      $(this).find('video').remove();
      $(this).find('iframe').remove();
      var varmobile = $(this).find('.mobilebanner').attr('value');

      if($(this).hasClass('image')) {
        $( "<img src='" + varmobile + "'>" ).insertBefore( $(this).find(".slickCaptionDiv" ) );
      }  
      else {
      $( "<img src='" + varmobile + "' style='height:100%;width: 100%;object-fit:cover;'>" ).insertBefore( $(this).find(".mobilebanner" ) );
      }
  }
});
});

var slideWrapper = $(".proddet_img"),
    iframes = slideWrapper.find('.embed-player'),
    lazyImages = slideWrapper.find('.slide-image'),
    lazyCounter = 0;

// POST commands to YouTube or Vimeo API
function postMessageToPlayer(player, command){
  if (player == null || command == null) return;
  player.contentWindow.postMessage(JSON.stringify(command), "*");
}

// When the slide is changing
function playPauseVideo(slick, control){
  var currentSlide, slideType, startTime, player, video;
  currentSlide = slick.find(".slick-current");
  slideType = currentSlide.attr("class").split(" ")[1];
  player = currentSlide.find("iframe").get(0);
  startTime = currentSlide.data("video-start");

  if (slideType === "vimeo") {
    switch (control) {
      case "play":
        if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
          currentSlide.addClass('started');
          postMessageToPlayer(player, {
            "method": "setCurrentTime",
            "value" : startTime
          });
        }
        postMessageToPlayer(player, {
          "method": "play",
          "value" : 1
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "method": "pause",
          "value": 1
        });
        break;
    }
  } else if (slideType === "youtube") {
    switch (control) {
      case "play":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "mute"
        });
        postMessageToPlayer(player, {
          "event": "command",
          "func": "playVideo"
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "pauseVideo"
        });
        break;
    }
  } else if (slideType === "video") {
    video = currentSlide.children('.videobox').children('video').get(0); //currentSlide.children("video").get(0);    
    if (video != null) {
      if (control === "play"){
        video.play();
      } else {
        video.pause();
      }
    }
  }
}

// Resize player
/*function resizePlayer(iframes, ratio) {
  if (!iframes[0]) return;
  var win = $(".main-slider"),
      width = win.width(),
      playerWidth,
      height = win.height(),
      playerHeight,
      ratio = ratio || 16/9;

  iframes.each(function(){
    var current = $(this);
    if (width / ratio < height) {
      playerWidth = Math.ceil(height * ratio);
      current.width(playerWidth).height(height).css({
        left: (width - playerWidth) / 2,
         top: 0
        });
    } else {
      playerHeight = Math.ceil(width / ratio);
      current.width(width).height(playerHeight).css({
        left: 0,
        top: (height - playerHeight) / 2
      });
    }
  });
}
*/

// DOM Ready
$(function() {
  // Initialize
  slideWrapper.on("init", function(slick){
    slick = $(slick.currentTarget);
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
    //resizePlayer(iframes, 16/9);
  });
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"play");
  });
  slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
    lazyCounter++;
    if (lazyCounter === lazyImages.length){
      lazyImages.addClass('show');
      // slideWrapper.slick("slickPlay");
    }
  });

  //start the slider
  /*slideWrapper.slick({
    // fade:true,
    autoplaySpeed:4000,
    lazyLoad:"progressive",
    speed:600,
    arrows:false,
    dots:true,
    cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
  });*/
});

$(document).ready(function(){
$('.proddet_img').on('setPosition', function (event, slick) {
  var he =  slick.$slideTrack.height();
  he = he - 20;
   $('.youtubebox').css('height', he + 'px');
   $('#slickImageVideo .videobox').css('height', he + 'px');
}); 
});