
var nav = '<div class="w3-top">' +
	  '<div class="w3-bar w3-black w3-card">' +
	   '<a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>'+
	    '<a href="home.html" class="w3-bar-item w3-button w3-padding-large">HOME</a>'+
	    '<a href="about_me.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">ABOUT ME</a>'+
	    '<a href="education.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">EDUCATION</a>'+
	    '<a href="work_experience.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">WORK EXPERIENCE</a>'+
	    '<div class="w3-dropdown-hover w3-hide-small">'+
	      '<button class="w3-padding-large w3-button" title="More">PROJECTS <i class="fa fa-caret-down"></i></button>'+
	      '<div class="w3-dropdown-content w3-bar-block w3-card-4">'+
	        '<a href="munchi.html" class="w3-bar-item w3-button">MUNCHI</a>'+
	        '<a href="this_website.html" class="w3-bar-item w3-button">THIS WEBSITE</a>'+
	        '<a href="#" class="w3-bar-item w3-button">CSE LIGHT SHOW</a>'+
	      '</div>'+
	    '</div>'+
	  '</div>'+
	'</div>'+

	'<!-- Navbar on small screens -->'+
	'<div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px">'+
	  '<a href="about_me.html" class="w3-bar-item w3-button w3-padding-large">ABOUT ME</a>'+
	  '<a href="education.html" class="w3-bar-item w3-button w3-padding-large">EDUCATION</a>'+
	  '<a href="work_experience.html" class="w3-bar-item w3-button w3-padding-large">WORK EXPERIENCE</a>'+
	  '<a href="projects.html" class="w3-bar-item w3-button w3-padding-large">PROJECTS</a>'+
	'</div>';


function createMenu() {
	document.getElementById("menu").innerHTML= nav;

}

