$(function(){//jQeury 준비

/* 모바일구분선언 */ 
  function isMobile() {
    if (navigator.userAgent.indexOf('Mobile') != -1) {
        return true;
    } else {
        return false;
    } 
  }
 /* pc */
  if(!isMobile()){
    /* gnb_menu */
    var gnbOpen = false;
    $('.gnb').mouseenter(function(){
		$('.gnb_wrap').addClass('open');
		gnbOpen = true;
    }).mouseleave(function(){
		$('.gnb_wrap').removeClass('open');
		gnbOpen = false;
  });
  $('.btn_whole').on('click', function(){
		if(gnbOpen == false){
			$('.gnb_wrap').addClass('open');
			gnbOpen = true;
		}else{
			$('.gnb_wrap').removeClass('open');
			gnbOpen = false;
		}
    });
    /* who */
    $('.who div').on('click',function(){
      $(this).toggleClass('open');
      $(this).siblings().toggleClass('close');
      if($(this).hasClass('open')){
          $('.who div').removeClass('open');
          $(this).addClass('open');
          $('.who div').siblings().removeClass('close');
          $(this).siblings().addClass('close');
        }
      });
      /* 슬라이드 메뉴 */
  $('.slide_menu_btn').on('click', function(){
    $('.slide_menu').toggleClass('open');
  });

  var tourSwiper = new Swiper('.tour > div', {
    slidesPerView: 3,
      spaceBetween: 85,
      slidesPerGroup: 3,
      loop: true,
      //loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".tour .next",
      prevEl: ".tour .prev"
        },
  })



  }else{
    $('.gnb_wrap').addClass('m_gnb_wrap');
    $('.gnb').addClass('m_gnb');
    $('.util').addClass('m_util');
    $('.major_wrap').addClass('m_major_wrap');
    $('.who_wrap').addClass('m_who');

    $('.m_btn').on('click', function(){
      if(isMobile())  
        $('.m_gnb_wrap .gnb_inner').toggleClass('open');   
        $('.m_btn').toggleClass('cross');   
        $('.m_util').toggleClass('open');   
    });
    
    $('.m_gnb > ul > li').on('click', function(){
      if(isMobile()) 
      $(this).find('.sub_menu').toggleClass('open');
      $('.m_gnb > ul > li').not(this).find('.sub_menu').removeClass('open');
          if($('.sub_menu').hasClass('open')){
            $('.gnb_inner').css('height', 'auto');
          }else{
            $('.gnb_inner').css('height', '100vh');
          }
    });
    $('.m_major_wrap  h4').on('click', function(){
    if(isMobile()) $(this).siblings('.ser_desc').toggleClass('open');   
    });
    
    $('.m_who h4').on('click', function(){
    if(isMobile()) $(this).siblings('ul').toggleClass('open');
  });

  var swiper = new Swiper('.shortcut_menu', {
    slidesPerView: 3,
    spaceBetween: 70,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
  var tourSwiper = new Swiper('.tour > div', {
    slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      //loopFillGroupWithBlank: true,
    loop: true,
    navigation: {
    nextEl: ".tour .next",
    prevEl: ".tour .prev"
      },
    });
}
/* tab메뉴 */
$('.tab_body > div').hide();  
$('.tab_body > div').eq(0).show();  
$('.tab_menu li').eq(0).addClass('selected');  

$('.tab_menu li').click(function(){  
    $('.tab_menu li').removeClass('selected');  
    $(this).addClass('selected'); 
    $('.tab_body > div').hide(); 
    $('.tab_body > div').eq($(this).index()).show(); 
});

  $('footer .link h5 button').on('click', function(){
    $(this).find('span').toggleClass('open');
    $(this).parents().next('.select_layer').toggleClass('open');
  });
  var homeSwiper = new Swiper(".home_slide", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".home_slide .next",
      prevEl: ".home_slide .prev"
    },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
  });
  var infoSwiper = new Swiper(".inform", {
    autoplay: {
      delay: 500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".inform .next",
      prevEl: ".inform .prev"
    }
  });
     
  var bannerSwiper = new Swiper('.banner_img_wrap', {
  slidesPerView: 5,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView:2,
      spaceBetween:50,
      },
    },
    navigation: {
      nextEl: ".banner .next",
      prevEl: ".banner .prev"
    },
});
  });
  
