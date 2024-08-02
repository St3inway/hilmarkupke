window.addEventListener('scroll', function() {
    var navbar = document.getElementById('Navbar');
    if (window.pageYOffset >= 1) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            var target = document.querySelector(this.getAttribute('href'));
            if(target) {
                event.preventDefault();
                var navbarHeight = document.querySelector('#Navbar').offsetHeight;
                var targetPosition = target.offsetTop - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});


