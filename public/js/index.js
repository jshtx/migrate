window.onload = function(){ 



$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


var lock = new Auth0Lock('q1fsov60Bn2PtGahSM5BDyNPxDkkshv0', 'shuajo.auth0.com');


var btn_login = document.getElementById('btn-login');

btn_login.addEventListener('click', function() {
  lock.show();
});

lock.on("authenticated", function(authResult) {
  lock.getProfile(authResult.idToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }
    localStorage.setItem('id_token', authResult.idToken);
    // Display user information
    show_profile_info(profile);
  });
});


// INDEED API AJAX CALL
var userIp = [];

  $.getJSON("http://jsonip.com/?callback=?", function (data) {
    userIp.push(data.ip);
  });

// https://www.indeed.com/jobs?as_and=software+developer&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=&jt=fulltime&st=&salary=50000&radius=25&l=Austin&fromage=any&limit=10&sort=&psf=advsrch

  $("#submit").on("click", function(event) {

      // var location =;
      // var radius =;
      // var siteType =;
      // var jobType =;
      // var limit =;
      // var country=;
      // var salary=;

          event.preventDefault();

          var queryURL = "http://api.indeed.com/ads/apisearch?publisher=6697079064168197&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=20&filter=&latlong=1&co=us&chnl=&userip="+ userIp[0] +"&useragent=MMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36&v=2&format=json";
      
          $.ajax({
                  url: queryURL,
                  method: "GET"
              })
           
              .done(function(response) {
                  
                  var results = JSON.stringify(response, null, 2);
                  console.log(results);
                  
              });
  });
// END OF INDEED API AJAX CALL

}