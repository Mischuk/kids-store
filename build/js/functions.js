$(document).ready(function(){
  //Functions
  function menuBlur() {
    if($(window).width() >= 769 ) {
      $('.main-catalog').mouseenter(function (e1) {
          var thisItem = $(this);
          clearTimeout(thisItem.data('hoverTimer'))
          var timer = setTimeout(function (e1) {
              if ($(thisItem).hasClass('opened-menu')) {
                  return;
              } else {
                  $(thisItem).addClass('opened-menu');
                  $('.main-catalog-list').addClass('opened');
                  $('header').addClass('open');
              }
          }, 500);
          thisItem.data('hoverTimer', timer)
      }).mouseleave(function (e2) {
          var thisItem = $(this);
          clearTimeout(thisItem.data('hoverTimer'))
          var timer = setTimeout(function (e2) {
              if (!$(thisItem).hasClass('opened-menu')) {
                  return;
              } else {
                  $(thisItem).removeClass('opened-menu');
                  $('.main-catalog-list').removeClass('opened');
                  $('header').removeClass('open');
              }
          }, 500);
          thisItem.data('hoverTimer', timer)
      });

      $('.main-catalog-list > li').mouseenter(function (e1) {
          var thisItem = $(this);
          clearTimeout(thisItem.data('hoverTimer'))
          var timer = setTimeout(function (e1) {
              if ($(thisItem).hasClass('opened')) {
                  return;
              } else {
                  $('.main-catalog-list > li').removeClass('opened');
                  $(thisItem).addClass('opened');
                  $('.container').addClass("opened-submenu");
              }
          }, 0);
          thisItem.data('hoverTimer', timer)
      }).mouseleave(function (e2) {
          var thisItem = $(this);
          clearTimeout(thisItem.data('hoverTimer'))
          var timer = setTimeout(function (e2) {
              if (!$(thisItem).hasClass('opened')) {
                  return;
              } else {
                  $(thisItem).removeClass('opened');
                  $('.container').removeClass("opened-submenu");
              }
          }, 500);
          thisItem.data('hoverTimer', timer)
      });
    };
  };

  function carousels() {
    $('.carousel-initial').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        items: 1,
        smartSpeed: 700,
        navRewind: false,
        navContainer: '.owl-n .wrapper',
        dotsContainer: '.owl-d .wrapper'
    });

    $('.content-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        items: 3,
        smartSpeed: 700,
        navRewind: false,
        dots: false,
        responsive: {
          0 : {
            items: 1,
            margin: 0
          },
          569 : {
            items: 2,
            margin: 15
          }
        }
    });
  };

  function incrementers() {
    var $counter = $(".counter-inp");
    $counter.keyup(function(e) {
        var $this = $(this);
        var val = $this.val();
        if (val > 100){
            e.preventDefault();
            $this.val(100);
        }
        else if (val < 1)
        {
            e.preventDefault();
            $this.val(1);
        }
    });
    $counter.keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
          return false;
       }
      });
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
  };

  function search() {
    var $mainSearch = $('.main-search');
    var $mainSearchInput = $mainSearch.find('.inp-text');
    $mainSearchInput.focus(function(){
      $mainSearch.addClass('active');
    });
    $mainSearchInput.blur(function(){
      $mainSearch.removeClass('active');
    });
  };

  function menuTrigger(){
    $("a.burger").click(function(){
      $(this).toggleClass("selected");
      $('.main-menu').toggleClass('menu-opened');
    });
    $('.menu-trigger').on('click', function(){
      $('header, .mobile-menu').toggleClass('open');
    });
  };

  function etc() {
    $('a[href=#]').click(function(e){
      e.preventDefault()
    });
  };

  function menuTab() {
    $('.main-catalog').on('click', function(){
      if ($(this).hasClass('show')) {
        $(this).removeClass('show');
      } else{
        $('.upper-level-menu .main-catalog').removeClass('show');
        $(this).toggleClass('show');
      }

    });
  };

  $(window).on('load resize', function(){
    var SUBMENU_WIDTH = $('.main-catalog-list').width();

    //Submenu
    if($(window).width() >= 769 ) {
      menuBlur();
    } else {
      menuTab();
    };

    //Submenu width
    if (($(window).width() <= 1260) && ($(window).width() >= 699)) {
      $('.main-menu').addClass('tabled');
      var mainMenuNav = $('.upper-level-menu').width();
      $('.secondary-menu').width(mainMenuNav - SUBMENU_WIDTH);

    } else {
      $('.main-menu').removeClass('tabled');
    };
  });

  //Func init
  carousels();
  incrementers();
  search();
  menuTrigger();
  etc();
});

