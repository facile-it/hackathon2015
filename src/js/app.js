$(document).ready(function() {

    $(".lines-button").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("close");
        $("header nav").toggleClass("open");
        return true;
    });


    $("#content_tab li").hide(); // Initially hide all content
    $("#tabs li:first").attr("id","current"); // Activate first tab
    $("#content_tab li:first").fadeIn(); // Show first tab content

    $('#tabs li a').click(function(e) {
        e.preventDefault();
        if ($(this).attr("class") == "current"){ //detection for current tab
            return
        }
        else{
            $("#content_tab li").hide(); //Hide all content
            $("#tabs li").attr("class",""); //Reset id's
            $(this).parent().attr("class","current"); // Activate this
            $( $(this).attr('href')).fadeIn(); // Show content for current tab
        }
    });

    var $window = $(window); //You forgot this line in the above example

    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
            var yPos = -($(this).scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });

            $bgobj.find('.row').css({
                'margin-top' : -(yPos)+"px"
            }); 
        });
    });

    var offset = 0;

    $('nav a[href^="#"]').on('click',function (e) {

        if ($(window).width() < 840) {
            $('nav').removeClass('open');
            $('.lines-button').removeClass('close');
            $offset = 0;
        }
        else {
            $offset = 70;
        }

        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $(id).offset().top - $offset;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });
});

var base = new google.maps.LatLng(45.497536, 9.221286);
var marker;
var map;

function initialize() {
    var styles = [
        {
          stylers: [
            { hue: "#ff6600" },
            { saturation: 10 }
          ]
        },{
          featureType: "road",
          elementType: "geometry",
          stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
          ]
        },{
          featureType: "road",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
    ];

    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    var mapOptions = {
        zoom: 17,
        center: base,
        disableDefaultUI: true,
        scrollwheel: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    marker = new google.maps.Marker({
      position: base,
      map: map,
      animation: google.maps.Animation.DROP,
    });

    google.maps.event.addListener(marker, 'click', toggleBounce);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}

function toggleBounce() {
    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
