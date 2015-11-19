$(document).ready(function(){
  //Functions
  function leadProfileImage(){
    CloudZoom.quickStart();
    $(function(){
      $('#zoom1').bind('click',function(){
        var cloudZoom = $(this).data('CloudZoom');
        cloudZoom.closeZoom();
        $.fancybox.open(cloudZoom.getGalleryList());
          return false;
        });
    });
  };



  function modal() {
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
      });
  };

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
                  $('.main-catalog-list > li').removeClass('opened');
                  $('.main-catalog-list > li').eq(0).addClass('opened');
              }
          }, 500);
          thisItem.data('hoverTimer', timer)
      });

      $('.main-catalog-list > li').mouseenter(function (e1) {
          var thisItem = $(this);
          eqHoveredItem = thisItem.index();
          clearTimeout(thisItem.data('hoverTimer'))
          var timer = setTimeout(function (e1) {
              if ($(thisItem).hasClass('opened')) {
                  return;
              } else {
                  $('.main-catalog-list > li').removeClass('opened');
                  $(thisItem).addClass('opened');
                  //$('.container').addClass("opened-submenu");
              }
          }, 0);
          thisItem.data('hoverTimer', timer)
      }).mouseleave(function (e2) {
          var thisItem = $(this);
          eqHoveredItem = thisItem.index();
          clearTimeout(thisItem.data('hoverTimer'))
          var timer = setTimeout(function (e2) {
              if (!$(thisItem).hasClass('opened')) {
                  return;
              } else {
                  // $(thisItem).removeClass('opened');
                  // $('.container').removeClass("opened-submenu");
              }
          }, 500);
          thisItem.data('hoverTimer', timer)
      });

      $('.main-catalog-list').hover(function(){
        $('.main-catalog-list > li').eq(eqHoveredItem).addClass('opened');
      })
    };
  };

  function carousels() {
    $('.carousel-initial').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        items: 1,
        smartSpeed: 450,
        fallbackEasing: 'ease-out',
        navRewind: true,
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
          },
          960 : {
            items: 3,
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
        if (val >= 100){
            e.preventDefault();
            $this.val(100);
        }
        else if (val <= 1)
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
  function tabs() {
    var $tabsNavLink = $('.tabs-nav a');
    $('.tabs-item').hide();
    $('.tabs-content').find('.tabs-item:first').show();
    $('.tabs-nav').find('li:first').find('a').addClass('current');

    $tabsNavLink.click(function(e) {
      e.preventDefault();
      $tabsNavLink.removeClass('current');
      $(this).addClass('current');
      $(this.hash).show().siblings().hide();
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

    $(".tel-mask").mask("+7(999) 999 99 99");

    $(".filter-reset").click(function() {
      $('.sidebar-filters input').val('').removeAttr('checked').removeAttr('selected');
    });
  };

  function changeView() {
    var $changeList = $('.change-view-list');
    var $changeBlock = $('.change-view-block');
    var $itemsList = $('.items-list');

    $changeList.on('click', function(){
      if ($(this).hasClass('active')) {
        return false;
      } else {
        $changeBlock.removeClass('active');
        $(this).addClass('active');
        $itemsList.fadeTo('slow', '0.01', function() {
          $(this).removeClass('view-block').addClass('view-list').delay(250).fadeTo('slow', '1');
        });
      }
    });
    $changeBlock.on('click', function(){
      if ($(this).hasClass('active')) {
        return false
      } else {
        $changeList.removeClass('active');
        $(this).addClass('active');
        $itemsList.fadeTo('slow', '0.01', function() {
          $(this).removeClass('view-list').addClass('view-block').delay(250).fadeTo('slow', '1');
        });
      }
    });

  };

  function menuTab() {
    $('.main-catalog .title-accordion').on('click', function(e){
      if ($(this).parent().parent().hasClass('show')) {
        $(this).parent().parent().removeClass('show');
        e.preventDefault();
      } else{
        $('.upper-level-menu .main-catalog').removeClass('show');
        $(this).parent().parent().toggleClass('show');
        e.preventDefault();
      }
    });

    $('.main-catalog .title-accordion-inner').on('click', function(e){
      $(this).parent().parent().toggleClass('open-sub-sub-menu');
      e.preventDefault();
    });
  };

  function sidebarAccordion(){
    $accContent = $('.accordion-content');
    $accLink =  $('.accordrion-item-link');

    $accLink.on('click', function (e) {
      if ($(this).next().hasClass('opened')){
        e.preventDefault();
        $accContent.removeClass('opened').slideUp(300);
        $accLink.removeClass('active');
      } else {
        e.preventDefault();
        $accLink.removeClass('active');
        $(this).addClass('active');
        $accContent.removeClass('opened').slideUp(300);
        $(this).next().addClass('opened').slideDown(300);
      };
    });
  };

  function rangeSlider() {
    var minPrice = $( ".slider-price" ).data("min");
    var maxPrice = $( ".slider-price" ).data("max");
    var stepPrice = $( ".slider-price" ).data("step");
    var Link = $.noUiSlider.Link;
    //Initialize slider
    $(".slider-price").noUiSlider({
      start: [15000, 40000],
      behaviour: 'none',
      connect: true,
      margin: 5000,
      step: stepPrice,
      range: {
        'min': minPrice,
        'max': maxPrice
      },
      serialization: {
      lower: [
        new Link({
          target: $(".price-from")
        }),
        new Link({
          target: $('.val-from')
        })
      ],
      upper: [
        new Link({
          target: $(".price-to")
        }),
        new Link({
          target: $(".val-to")
        })
      ],
      format: {
        thousand: ' ',
        postfix: '',
        mark: ',',
        step: '100',
        decimals: 0
      }
    }
    });
    //Replace block with price
    $('.val-from').appendTo( $('.slider-price .noUi-connect') );
    $('.val-to').appendTo( $('.slider-price .noUi-background') );



      $('.price-to, .price-from').on('focus', function () {
        $(this).data('default', this.value);
        this.value = ''; // clear
      });

      $('.price-to, .price-from').blur(function(){
          if (!this.value) {
              this.value = $(this).data('default');
          }
      });

      //Replace focus to input with id #zield after press key Enter
      $(".price-from").keydown(function (e){
          if(e.keyCode == 13){
              $(".price-from").blur();
          $(this).next('.price-to').focus();
          }
        });

        //Unfocused after press Enter
        $(".price-to").keydown(function (e){
          if(e.keyCode == 13){
              $(".price-to").blur();
          }
        });

        //Only number for input
        $(".price-from, .price-to").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
      });
  };

  function select() {
    $('select').each(function () {
        var $thisSelect = $(this),
            numberOfOptions = $(this).children('option').length;
        $thisSelect.addClass('s-hidden');
        $thisSelect.wrap('<div class="select"></div>');
        $thisSelect.after('<div class="styledSelect"></div>');
        var $styledSelect = $thisSelect.next('div.styledSelect');
        $styledSelect.text($thisSelect.children('option').eq(0).text());
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $thisSelect.children('option').eq(i).text(),
                rel: $thisSelect.children('option').eq(i).val()
            }).appendTo($list);
        }
        var $listItems = $list.children('li');
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $thisSelect.val($(this).attr('rel'));
            $list.hide();
        });
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
  };

  function sidebarFilters() {
    $('.sidebar-filters .header a').on('click', function(){
      $(this).parent().parent().toggleClass('hide');
    });
  };

  function mobileShowInnerMenus() {
    $('.mobile-menu-show-categories').on('click', function(){
      $('.mobile-menu-show-filters').removeClass('active');
      $('.sidebar-filters').slideUp(250);
      $('.mobile-menu-show-filters').text('Показать фильтры');

      $('.main-menu').slideToggle(250);
      $(this).toggleClass('active');
      $(this).text(function(i, text){
        return text === "Показать категории" ? "Скрыть категории" : "Показать категории";
      });
    });
    $('.mobile-menu-show-filters').on('click', function(){
      $('.mobile-menu-show-categories').removeClass('active');
      $('.main-menu').slideUp(250);
      $('.mobile-menu-show-categories').text('Показать категории');

      $('.sidebar-filters').slideToggle(250);
      $(this).toggleClass('active');
      $(this).text(function(i, text){
        return text === "Показать фильтры" ? "Скрыть фильтры" : "Показать фильтры";
      });
    });
  }


  $(window).on('load resize', function(){
    var SUBMENU_WIDTH = $('.main-catalog-list').width();

    //Submenu
    if($(window).width() >= 769 ) {
      menuBlur();
    } else {
      // menuTab();
    };

    if($(window).width() <= 940) {
      $('.filtred-items .items-list').removeClass('view-list').addClass('view-block');

    }

    //Submenu width
    if (($(window).width() <= 1260) && ($(window).width() >= 699)) {
      $('.main-menu').addClass('tabled');
      var mainMenuNav = $('.upper-level-menu').width();
      $('.secondary-menu').width(mainMenuNav - SUBMENU_WIDTH);

    } else {
      $('.main-menu').removeClass('tabled');
    };
  });

  $(window).load(function(){
    $(".custom-scrollbar").mCustomScrollbar();
  });

  //Func init
  carousels();
  select();
  incrementers();
  search();
  menuTrigger();
  modal();
  menuTab();
  sidebarAccordion();
  etc();
  changeView();
  if( $('.sidebar').length ) { rangeSlider(); }
  sidebarFilters();
  leadProfileImage();
  tabs();
  mobileShowInnerMenus();
  $('body').on('click', '.cloudzoom-gallery', function(){
    alert('123')
  })
});

