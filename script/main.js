// 외부 제이쿼리 서식

$(document).ready(function(){

  // 인트로 타이핑 효과 ------------------------------------------------------------------
  var typingBool = false; 
  var typingIdx = 0; 
  var liIndex = 0;
  var liLength = $(".typing-txt>li").length; //3
  
  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $(".typing-txt>li").eq(liIndex).text(); 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
  if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
  } 

  function typing(){
    $(".cursor li").removeClass("on");
    $(".cursor li").eq(liIndex).addClass("on");
    if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
      $(".cursor li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
      typingIdx++; 
    }else{ 
      if(liIndex<liLength-1){
        //다음문장으로  가기위해 인덱스를 1증가
        liIndex++; 
        //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>li").eq(liIndex).text(); 
      
        //다음문장 타이핑전 1초 쉰다
        clearInterval(tyInt);
        //타이핑종료
        setTimeout(function(){
          //1초후에 다시 타이핑 반복 시작
          tyInt = setInterval(typing,150);
        },400);
    } else if(liIndex==liLength-1){

      //마지막 문장까지 써지면 반복종료
      clearInterval(tyInt);
      }
    } 
  }

  // gnb 인트로 화면 이후로 노출시키기 ---------------------------------------------
  $('.swiper-pagination span').hide();
  $('.n_bg').hide();

  $('body').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    console.log(wheel);

    if($('#intro').hasClass('swiper-slide-active')==false){
      $('.swiper-pagination span').show();
      $('.n_bg').show();
    }else{
      $('.swiper-pagination span').hide();
      $('.n_bg').hide();
    }
  });

  $('.swiper-pagination span:first-child').click(function(){
    $('.swiper-pagination span').hide();
    $('.n_bg').hide();
  });

  // pc 목업 ----------------------------------------------------------------------------
  const pc_tool = $('.pc_tool');
  const p_01 = $('.p_01');
  const p_02 = $('.p_02');
  const p_03 = $('.p_03');
  const P_04 = $('.p_04');

  p_01.mouseenter(function(){
    $(this).parent().find('div:nth-child(2) img').stop().animate({'top':'-950px'},6000);
  });
  p_02.mouseenter(function(){
    $(this).parent().find('div:nth-child(2) img').animate({'top':'-892px'},6000);
  });
  p_03.mouseenter(function(){
    $(this).parent().find('div:nth-child(2) img').animate({'top':'-880px'},6000);
  });
  P_04.mouseenter(function(){
    $(this).parent().find('div:nth-child(2) img').animate({'top':'-666px'},5000);
  });
  pc_tool.mouseleave(function(){
    $(this).parent().find('div:nth-child(2) img').stop().animate({'top':'0px'},0);
  });

  // mobile 목업 --------------------------------------------------------------------------
  const m_tool = $('.m_tool');
  const m_01 = $('.m_01');
  const m_02 = $('.m_02');
  const m_03 = $('.m_03');
  const m_04 = $('.m_04');

  m_01.mouseenter(function(){
    $(this).parent().find('div:last-child img').stop().animate({'top':'-1482px'},8000);
  });
  m_02.mouseenter(function(){
    $(this).parent().find('div:last-child img').animate({'top':'-1018px'},6000);
  });
  m_03.mouseenter(function(){
    $(this).parent().find('div:last-child img').animate({'top':'-1984px'},10000);
  });
  m_04.mouseenter(function(){
    $(this).parent().find('div:last-child img').animate({'top':'-1118px'},6000);
  });
  m_tool.mouseleave(function(){
    $(this).parent().find('div:last-child img').stop().animate({'top':'0px'},0);
  });

  // 프로세스 모달창 띄우기 ------------------------------------------------------------------
  const process_btn01 = $('.process01');
  // const process_btn02 = $('.process02');
  // const process_btn03 = $('.process03');
  // const process_btn04 = $('.process04');
  const close_btn = $('i.fa-times');

  process_btn01.click(function(){
    $('.p_modal01').show();
  });
  // process_btn02.click(function(){
  //   $('.p_modal02').show();
  // });
  // process_btn03.click(function(){
  //   $('.p_modal03').show();
  // });
  // process_btn04.click(function(){
  //   $('.p_modal04').show();
  // });
  close_btn.click(function(){
    $('.process_modal').hide();
  });

  // UI/UX 디자인 --------------------------------------------------------------------------

  // 카드 마우스 오버시 뒤집기
  $('.card').hover(function(){
    $(this).children().stop().css('transform','rotateY(180deg');
  },function(){
    $(this).children().stop().css('transform','rotateY(0deg');
  });

  // 버튼 클릭시 모달창 띄우기
  const c_button = $('.c_button');
  const c_button2 = $('.c_button2');

  c_button.click(function(){
    let img_src = $(this).parent().parent().parent().siblings().find('img').attr('src');

    let modal=`
      <div class="modal">
        <div class="center">
          <img src=${img_src} alt="">
        </div>
      </div>
    `;
    $('body').append(modal);
    
    let modal_img = $('.modal img');
    modal_img.click(function(){
      $('.modal').hide();
    });
  });

  c_button2.click(function(){
    let img_src = $(this).parent().parent().parent().siblings().find('img').attr('src');

    let modal=`
      <div class="modal_2">
        <div class="center">
          <img src=${img_src} alt="">
        </div>
      </div>
    `;
    $('body').append(modal);
    
    let modal_img = $('.modal img');
    let modal2_img = $('.modal_2 img');
    modal_img.click(function(){
      $('.modal').hide();
    });
    modal2_img.click(function(){
      $('.modal_2').hide();
    });
  });

  // 페이지네이션 --------------------------------------------------------------------------
  $('.swiper-pagination span').eq(0).text('top');
  $('.swiper-pagination span').eq(1).text('profile');
  $('.swiper-pagination span').eq(2).text('project 1');
  $('.swiper-pagination span').eq(3).text('project 2');
  $('.swiper-pagination span').eq(4).text('project 3');
  $('.swiper-pagination span').eq(5).text('project 4');
  $('.swiper-pagination span').eq(6).text('ui/ux design');

});