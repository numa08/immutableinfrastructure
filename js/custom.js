/* custom behavior *//* custom behavior */
(function  () {
	window.addEventListener("load", function() {
		var script = document.getElementsByTagName('head')[0].getElementsByTagName('script')[0];
		script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js");
	}, false);		
})();

$(function(){
	//Add Footer
	$("#slides").prepend(function  () {
		var link = $("<div>", {
			"class" : "left",
		}).append($("<a>", {
			target  : "_blank",
			href 	: "https://twitter.com/numa08",
			text    : "@numa08"
		}));

		var hashtag = $("<ul>")
		.append($("<li>",{
			"class" : "hashtag"
		}));

		var footer = $("<div>", {
			"class" : "footer",
		}).append(link)
		.append(hashtag);

		return footer;
	}());

	//Add Header
	$("#slides").prepend(function  () {
		var slideTitle = $("<div>", {
			"class" : "left"
		}).append($("<a>", {
			"class" : "topbar_link",
			text : "Immutable Infrastructure",
			href : "http://numa08.net"
		}));
		var eventTitle = $("<a>", {
			"class" : "topbar_link right",
			text : "新宿Scala座 '14年２月号",
			href : "http://scala.numa08.net"
		});
		var topbar = $("<div>", {
			"class" : "topbar"
		}).append(slideTitle);
		return topbar;
	}());
});