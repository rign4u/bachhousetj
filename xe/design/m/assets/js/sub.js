$(function () {
  $('.header').addClass('sub')
  // $('.sub-top-copyright').addClass('is--active')
  $('.sub-top-title').addClass('is--active')
  // $('.sub-content__img').addClass('is--active')
  $('.main-quick-menu').addClass('is--active')

  AOS.init({
    duration: 1000
  });

	$('img[usemap]').rwdImageMaps();


  $('ul.tabs li').click(function () {
		var tab_area_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-area').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_area_id).addClass('current');
	});

  $('ul.tabs2 li').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs2 li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	});

	$('ul.unit-tab li').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('ul.unit-tab li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	});
	
	
	
	/*jQuery('.display-link1').click(function (e) {  
		e.preventDefault();  
		var popup = window.open("../display65.html", "display");  
	});
	jQuery('.display-link5').click(function (e) {  
		var popup = window.open("../display75.html", "display",  "toolbar=no, menubar=no, scrollbars=yes, resizable=yes");  
	});

	jQuery('.element-link1').click(function (e) {  
		var popup = window.open("../element65a.html", "element",  "toolbar=no, menubar=no, scrollbars=yes, resizable=yes");  
	});
	jQuery('.element-link2').click(function (e) {  
		var popup = window.open("../element65b.html", "element",  "toolbar=no, menubar=no, scrollbars=yes, resizable=yes");  
	}); 
	jQuery('.element-link3').click(function (e) {  
		var popup = window.open("../element65c.html", "element",  "toolbar=no, menubar=no, scrollbars=yes, resizable=yes");  
	}); 
	jQuery('.element-link4').click(function (e) {  
		var popup = window.open("../element65d.html", "element",  "toolbar=no, menubar=no, scrollbars=yes, resizable=yes");  
	});
	jQuery('.element-link5').click(function (e) {  
		var popup = window.open("../element75a.html", "element",  "toolbar=no, menubar=no, scrollbars=yes, resizable=yes");  
	});
	jQuery('.element-link6').click(function (e) {  
		var popup = window.open("../element75b.html", "element",  "toolbar=no, menubar=no, scrollbars=yes, resizable=yes");  
	});
	popup.close();*/

})
