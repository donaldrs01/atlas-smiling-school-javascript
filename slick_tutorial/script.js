alert("Is this thing on, Slick?")

$(document).ready(function(){
    $('.test-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });
  });