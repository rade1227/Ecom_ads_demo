document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});

// var swiper = new Swiper('.packages-swiper', {
//     slidesPerView: 4,
//     spaceBetween: 10,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//         },
//         1024: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//         },
//     },
// });


// owl carousel

jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });

//   <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

  $(document).ready(function(){
    $("#carousel1, #carousel2").owlCarousel({
      items: 5,
      loop: true,
      nav: true,
    //   dots: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true
    });
  });