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


}