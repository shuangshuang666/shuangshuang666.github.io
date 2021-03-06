 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");
	  $('.responsive').slick("refresh");/* for hidden tab slick carousel*/

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	$('.tab_drawer_heading').each(function() {
    	var tabid = $(this).attr("rel"); 
    	$(this).addClass(tabid);
     });  

	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
	  $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 

      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
      
      $('html, body').animate({
        scrollTop: $(".d_active").offset().top
       }, 2000);

    });
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");