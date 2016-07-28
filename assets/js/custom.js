jQuery(document).ready(function($){



    // setup revolution slider
    $('.tp-banner').show().revolution({
        sliderType: "standard",
        jsFileLocation: "assets/include/rs-plugin/js/",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 6000,
        startwidth: 2000,
        startheight: 1000,
        hideThumbs: 200,
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,
        fullScreenAlignForce: "on",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            touch:{
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                style: "hermes",
                enable: false,
                hide_onmobile: true,
                hide_onleave: true,
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 10,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 10,
                    v_offset: 0
                }
            }
        },
        touchenabled: "on",
        onHoverStop: "on",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        parallax: "mouse",
        parallaxBgFreeze: "on",
        parallaxLevels: [7,4,3,2,5,4,3,2,1,0],
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        shadow: 0,
        fullWidth: "on",
        fullScreen: "off",
        spinner: "spinner4",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "on",
        hideTimerBar: "on",
        hideThumbsOnMobile: "on",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "on",
        hideArrowsOnMobile: "on",
        hideThumbsUnderResolution: 0,
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
    });




        // Google Map Scripts//
        function init_map(){
            var iconBase = 'assets/images/icons/';
                      var myOptions = {zoom:15,
                      panControl: true,
                                zoomControl: false,
                                mapTypeControl: false,
                                scaleControl: false,
                                streetViewControl: false,
                                overviewMapControl: false,
                                draggable: false,
                                scrollwheel: false,
                                noWrap: true,
                center:new google.maps.LatLng(45.469021, -122.652776),mapTypeId: google.maps.MapTypeId.ROADMAP};
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            marker = new google.maps.Marker({map: map,icon: iconBase + 'marker.png',animation: google.maps.Animation.DROP,position: new google.maps.LatLng(45.469021, -122.652776)});
            infowindow = new google.maps.InfoWindow({content:"<div class='noScroll'><b>7718 SE 13th Ave</b><br/>Portland, Oregon 97202</a></div>" });
            google.maps.event.addListener(marker, "click", function(){
                infowindow.open(map,marker);
            });
            infowindow.open(map,marker);
        }
        google.maps.event.addDomListener(window, 'load', init_map);


});

