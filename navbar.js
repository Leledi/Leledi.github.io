var page = location.pathname.split("/").slice(-1)

if (page==null){
	page="index.html"
}

var Nav = '<nav class="navbar navbar-expand-lg navbar-light bg-danger">'+
    		'<a class="navbar-brand">'
if (page=="index.html"){
	Nav=Nav+'<img src=".\\brand.jpg" width="30" height="30" class="d-inline-block align-top rounded-circle" alt="">ANIMAD</a>'+
    		'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#list" aria-controls="list" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>'
}

else {
	Nav=Nav+'<img src="..\\brand.jpg" width="30" height="30" class="d-inline-block align-top rounded-circle" alt="">ANIMAD</a>'+
    		'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#list" aria-controls="list" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>'
}

if (page=="index.html"){
	Nav=Nav+'<div class="collapse navbar-collapse" id="list">'+
    			'<ul class="navbar-nav mr-auto">'+
      				'<li class="nav-item active">'+
        				'<a class="nav-link" href="#">Home </a>'+
      				'</li>'+
      				'<li class="nav-item">'+
      					'<a class="nav-link" href=".\\pages\\news.html"> Novità </a>'+
      				'</li>'+
      				'<li class="nav-item">'+
      					'<a class="nav-link" href=".\\pages\\contatti.html"> Contatti </a>'+
      				'</li>'+
      				'<li class="nav-item dropdown">'+
        				'<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Cerca per iniziale </a>'+
        				'<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
          					'<a class="dropdown-item" href=".\\pages\\page_a.html"> A </a>'+
          					'<a class="dropdown-item" href=".\\pages\\page_b.html">B</a>'+
          					'<a class="dropdown-item" href=".\\pages\\page_c.html">C</a>'+
          					'<div class="dropdown-divider"></div>'+
          					'<a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true"> In arrivo altre lettere </a>'+
        				'</div>'+
      				'</li>'+
              '<li class="nav-item">'+
                '<a class="nav-link" href=".\\pages\\log.html"> Log in </a>'+
              '</li>'+
    			'</ul>'+
    		'</div>'+
    	'</nav>'
}

else {
	Nav=Nav+'<div class="collapse navbar-collapse" id="list">'+
    			'<ul class="navbar-nav mr-auto">'+
      				'<li class="nav-item">'+
        				'<a class="nav-link" href="..\\index.html">Home </a>'+
      				'</li>'
              
    if (page=="news.html"){
    	Nav=Nav+'<li class="nav-item active">'+
    		'<a class="nav-link" href="#"> Novità </a>'+
              '</li>'
    }

    else {
    	Nav=Nav+'<li class="nav-item">'+
    		'<a class="nav-link" href=".\\news.html"> Novità </a>'+
              '</li>'
    }

    if (page=="contatti.html"){
    	Nav=Nav+'<li class="nav-item active">'+
    		'<a class="nav-link" href="#"> Contatti </a>'+
              '</li>'
    }

    else {
    	Nav=Nav+'<li class="nav-item">'+
    		'<a class="nav-link" href=".\\contatti.html"> Contatti </a>'+
              '</li>'
    }
    

    	Nav=Nav+'<li class="nav-item dropdown">'+
        				'<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Cerca per iniziale </a>'+
        				'<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
          					'<a class="dropdown-item" href=".\\page_a.html">A</a>'+
          					'<a class="dropdown-item" href=".\\page_b.html">B</a>'+
          					'<a class="dropdown-item" href=".\\page_c.html">C</a>'+
          					'<div class="dropdown-divider"></div>'+
          					'<a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true"> In arrivo altre lettere </a>'+
        				'</div>'+
      				'</li>'

    
    if (page=="log.html"){
    	Nav=Nav+'<li class="nav-item active">'+
                '<a class="nav-link" href="#"> Log in </a>'+
              '</li>'+
    		'</ul>'+
    		'</div>'+
    	'</nav>'
    }

    else {
    	Nav=Nav+'<li class="nav-item">'+
                '<a class="nav-link" href=".\\log.html"> Log in </a>'+
              '</li>'+
    		'</ul>'+
    		'</div>'+
    	'</nav>'
    }  				
              
}


  			










    	
