/*! hackathon2015 - v1.0.0 - 2015-06-03
* Copyright (c) 2015 Facile.it S.p.A */
function initialize(){var a=[{stylers:[{hue:"#ff6600"},{saturation:10}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]}],b=new google.maps.StyledMapType(a,{name:"Styled Map"}),c={zoom:17,center:base,disableDefaultUI:!0,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}};map=new google.maps.Map(document.getElementById("map-canvas"),c),marker=new google.maps.Marker({position:base,map:map,animation:google.maps.Animation.DROP}),google.maps.event.addListener(marker,"click",toggleBounce),map.mapTypes.set("map_style",b),map.setMapTypeId("map_style")}function toggleBounce(){null!=marker.getAnimation()?marker.setAnimation(null):marker.setAnimation(google.maps.Animation.BOUNCE)}$(document).ready(function(){var a=$(window);$('section[data-type="background"]').each(function(){var b=$(this);$(window).scroll(function(){var c=-(a.scrollTop()/b.data("speed")),d="50% "+c+"px";b.css({backgroundPosition:d})})}),$(window).scroll(function(){var a=$(window).scrollTop();a>0?($("header").addClass("fixed"),$(".logo i").removeClass("ZZ_icon_logo"),$(".logo i").addClass("ZZ_icon_logo_faccino")):($("header").removeClass("fixed"),$(".logo i").removeClass("ZZ_icon_logo_faccino"),$(".logo i").addClass("ZZ_icon_logo"))}),$("a[href*=#]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length&&a||$("[name="+this.hash.slice(1)+"]"),a.length){var b=a.offset().top;return $("html,body").animate({scrollTop:b},1e3),!1}}})});var base=new google.maps.LatLng(45.497536,9.221286),marker,map;google.maps.event.addDomListener(window,"load",initialize);