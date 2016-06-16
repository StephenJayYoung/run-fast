jQuery(document).ready(function($){



		// Google Map Scripts//
  	    function init_map(){
  		    var iconBase = 'assets/images/icons/';
                      var myOptions = {zoom:16,
                      panControl: true,
					            zoomControl: false,
					            mapTypeControl: false,
					            scaleControl: false,
					            streetViewControl: false,
					            overviewMapControl: false,
					            draggable: false,
					            scrollwheel: false,
   				center:new google.maps.LatLng(47.153118, -122.281991),mapTypeId: google.maps.MapTypeId.ROADMAP};
  		    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  		    marker = new google.maps.Marker({map: map,icon: iconBase + 'marker.png',animation: google.maps.Animation.DROP,position: new google.maps.LatLng(47.153118, -122.281991)});
  		    infowindow = new google.maps.InfoWindow({content:"<div class='noScroll'><b>3928 10th St SE</b><br/>Puyallup, WA 98374</a></div>" });
  		    google.maps.event.addListener(marker, "click", function(){
  			    infowindow.open(map,marker);
  		    });
  		    infowindow.open(map,marker);
  	    }
  	    google.maps.event.addDomListener(window, 'load', init_map);


});

