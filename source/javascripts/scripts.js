jQuery(document).ready(function ($) {

$('#nav, #sitemap, #quote').onePageNav({
	scrollOffset: 50
	});

$('#btn-down').click(function() {
   $.scrollTo($('#timeline').offset().top -50, 500);
});

$('#home').height($(window).height() - 50);

$("[data-toggle='tooltip']").tooltip(); 

var latlng = new google.maps.LatLng(14.552915, 120.980098);
var styles = [
	{
		"featureType": "landscape",
		"stylers": [
			{
				"hue": "#E8CB43"
			},
			{
				"saturation": 85.20000000000002
			},
			{
				"lightness": 35.599999999999994
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.highway",
		"stylers": [
			{
				"hue": "#E8CB43"
			},
			{
				"saturation": 56.39810426540279
			},
			{
				"lightness": -21.345098039215685
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.arterial",
		"stylers": [
			{
				"hue": "#E8CB43"
			},
			{
				"saturation": 14.999999999999986
			},
			{
				"lightness": 8.800000000000011
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.local",
		"stylers": [
			{
				"hue": "#E8CB43"
			},
			{
				"saturation": 66.79999999999998
			},
			{
				"lightness": 19.39999999999999
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "water",
		"stylers": [
			{
				"hue": "#E8CB43"
			},
			{
				"saturation": 62.400000000000006
			},
			{
				"lightness": 27.400000000000006
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "poi",
		"stylers": [
			{
				"hue": "#E8CB43"
			},
			{
				"saturation": 63.79999999999998
			},
			{
				"lightness": 6.6000000000000085
			},
			{
				"gamma": 1
			}
		]
	}
];

var myOptions = {
	zoom: 15,
	center: latlng,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: true,
	styles: styles
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);

var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="map-heading">Sofitel Philippine Plaza Manila</h3>'+
    '<div id="bodyContent">'+
    '<p>See you there! :)</p>'+
    '</div>'+
    '</div>';
 
var infowindow = new google.maps.InfoWindow({
    content: contentString
});

var companyLogo = new google.maps.MarkerImage('images/marker.png',
	new google.maps.Size(22,36),
	new google.maps.Point(0,0),
	new google.maps.Point(50,50)
);
var companyPos = new google.maps.LatLng(14.552915, 120.980098);
var companyMarker = new google.maps.Marker({
	position: companyPos,
	map: map,
	icon: companyLogo,
	title:"Sofitel Philippine Plaza Manila"
});

google.maps.event.addListener(companyMarker, 'click', function() {
  infowindow.open(map,companyMarker);
});

});