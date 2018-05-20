$(document).ready(function() {

	// Bootstrap bugfix (issue #14282) - .collapse('hide') toggles instead of hides on first function call on page
	// See here for more info https://github.com/twbs/bootstrap/issues/14282#issuecomment-51553141
	$.fn.collapse.Constructor.DEFAULTS.toggle = false;
	
	// Agenda nav affix functionality
	$( "#nav-agenda" ).affix({
        offset: {
            top: ( jQuery("#nav-agenda").offset().top - 50),
        }
    }).on('affix.bs.affix', function() {
    	// Gracefull modification of DOM content flow
		$('#agenda-content').css('padding-top', '50px');
	}).on('affix-top.bs.affix', function() {
		// Gracefull modification of DOM content flow
		$('#agenda-content').css('padding-top', '0');
	});

	// Agenda - Navbar Brand functionality
	$('#nav-agenda-collapse a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		
		var tabId = $(e.target).attr('href');
		var targetId = tabId + '-navbar-brand';
		
		$(targetId).siblings().hide();
		$(targetId).show();
	  	
	  	//e.relatedTarget // previous active tab
	});

	// Agenda - Expand all/Collapse all functionality
	$('a#nav-agenda-expand').click(function(e) {
		e.preventDefault();
		$('#agenda-content .session-details').collapse('show');
	});
	$("a#nav-agenda-collapse").click(function(e) {
		e.preventDefault();
		$('#agenda-content .session-details').collapse('hide');
	});

	// Agenda - Expand/Collapse functionalitu
	$('.session-details').on('hide.bs.collapse', function() {
		$(this).prev('.session-row').show();
	});
	$('.session-details').on('show.bs.collapse', function() {
		$(this).prev('.session-row').hide();
	});

	// Make tabs agenda tabs linkable via id (e.g. .../conference/#day2)
	var url = document.location.toString();
    if (url.match('#')) {
        jQuery('.nav-agenda-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    }

    // Change hash for page-reload
    jQuery('.nav-agenda-tabs a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
        var topPosition = $('#agenda').offset().top;
        $(window).scrollTop(topPosition);
    });

    // NEEDS REVIEW () - add active classes to agenda nav
    $('.nav-agenda-footer a').on('click', function() {
    	var tabId = $(this).attr('href');
    	console.log(tabId);
    	$('.nav-agenda-tabs li').removeClass('active');
        $('.nav-agenda-tabs li[data-tab="' + tabId + '"]').addClass('active');
    });

});