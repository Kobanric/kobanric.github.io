$(window).scroll(function(){

    st = $(window).scrollTop();

    if(st > 148) {
      $('.tbar .contacts').slideUp(400);
      $('.tbar .tmenu').addClass('tmenu-fixed');
      $('.tbar .logo img').attr('src', 'design/logo-inv.png');
    }
    else {
      $('.tbar .contacts').slideDown(400);
      $('.tbar .tmenu').removeClass('tmenu-fixed');
      $('.tbar .logo img').attr('src', 'design/logo.png');
    }

    $('header .graph').css('background-position', '0 -'+(st/3)+'px');

  
  });


$('.lift').click(function(e){
    e.preventDefault();
    var href = $(this).attr('href');

    $('html,body').animate({
      scrollTop: ($(href).offset().top)-83
    }, 1200);

  });