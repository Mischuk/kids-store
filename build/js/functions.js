$(document).ready(function(){
  //Functions
  function carousel() {
    $('.carousel-initial').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        items: 1,
        smartSpeed: 700,
        navRewind: false,
        navContainer: '.owl-n',
        dotsContainer: '.owl-d'
    });
  };

  function incrementers() {
    $(".counter form div").append('<div class="inc button">+</div><div class="dec button">-</div>');
    $(".button").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find("input").val(newVal);
    });
  };

  function etc() {
    $('a[href=#]').click(function(e){
      e.preventDefault()
    });
  };

  //Func init
  carousel();
  incrementers();
  etc();
});

