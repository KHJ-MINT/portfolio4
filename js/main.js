$(document).ready(function(){
    //마우스 휠 이벤트
    $('section').on('mousewheel',function(event,delta){
        //마우스 휠을 올렸을 때
        if(delta > 0){
            let secPrev = $(this).prev().offset().top;
            $('body,html').stop().animate({scrollTop:secPrev},1400,'easeOutBounce');
        }//마우스 휠을 내렸을 때
        else{
            let secNext = $(this).next().offset().top;
            $('body,html').stop().animate({scrollTop:secNext},1400,'easeOutBounce');
        }
    })
    //menu li를 클릭할 때 해당 위치로 이동
    $('#menu li').on('click',function(){
        let winh = $(window).height();
        let liNum = $(this).index();
        $('body,html').stop().animate({scrollTop:winh*liNum},1400);
    })
    //스크롤할 때 해당 li요소에 on클래스 설정
    $(window).on('scroll',function(){
        let winh = $(window).height();
        let sct = Math.ceil($(this).scrollTop());
        for (let i=0; i<4; i++){
            if(sct >= winh*i && sct < winh*(i+1)){
                console.log(i);
                $('#menu li').removeClass('on');
                $('#menu li').eq(i).addClass('on');
            }
        }
    })
    //section 위에서 마우스를 움직일 때 이미지 위치 이동
    $('section').on('mousemove',function(event){
        let posX = event.pageX;
        let posY = event.pageY;

        //첫번째 section 이미지
        $('.img11').css({'right':20-(posX/30),'bottom':20-(posY/30)});
        $('.img12').css({'right':130+(posX/30),'bottom':-40+(posY/30)});
        $('.img13').css({'right':60+(posX/30),'bottom':180+(posY/30)});

        //두번째 section 이미지
        $('.img21').css({'right':-180+(posX/30),'bottom':-480+(posY/30)});
        $('.img22').css({'right':130+(posX/30),'bottom':-40+(posY/30)});

        //세번째 section 이미지
        $('.img31').css({'right':180-(posX/30),'bottom':30-(posY/30)});
        $('.img32').css({'right':110+(posX/30),'bottom':-270+(posY/30)});
        $('.img33').css({'right':-70+(posX/30),'bottom':-130+(posY/30)});

        //네번째 section 이미지
        $('.img41').css({'right':20-(posX/30),'bottom':-120+(posY/30)});
        $('.img42').css({'right':0+(posX/30),'bottom':-180+(posY/30)});
    })
})