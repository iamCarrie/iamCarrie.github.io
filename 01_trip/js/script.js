var $win = $(window),
    winW = $win.width(),
    winH = $win.height();
_media = 1023;


var $btn_sec1 = $('.kvbtn .btn'),
    thisfoto = 0;
var fotoRunStart;

var $fotolist = $('.kvfotorun');

var $btn_top = $('.btn_top');
var $btn_go = $('.btn_gobox');
var $headerH = $('header').height(),
    $headerW = $('header').outerWidth(true),
    $hmenu = $('#headercontent'),
    $btn_ham = $('.hamburger');


var $main = $('#maincontainer'),
    countImages = $('body img').size();

var mapTrue = false;





$(function() {


    $('body').imagesLoaded()
        .always(function() {
        TweenMax.to('#loading', 1, {display: 'none',opacity: 0,delay: .2,ease: Quart.easeOut});
        TweenMax.set('body,html', {scrollTop:0,onComplete: function() {
            KV.seek(0);
            sec1.seek(0);
            sec2.seek(0);
            sec3.seek(0);
            KV.stop(0);
            sec1.stop(0);
            sec2.stop(0);
            sec3.stop(0);
            KV.play();


        }});
        TweenMax.set($main, {opacity:'1',ease: Quart.easeOut});


    });

    $btn_top.fadeOut(0);
    $fotolist.find('img').fadeOut(0);
    $fotolist.eq(thisfoto).find('img').fadeIn(0);

    /*--------------
        KV
    --------------*/

    function scrollTo() {
        var $stroke = $('#stroke'),
            thistop = $stroke.offset().top;
        TweenMax.to('body,html', .8, {scrollTop: thistop,ease: Quart.easeOut});
    }



    $btn_top.click(
        function() {
            TweenMax.to('body,html', .8, {scrollTop: 0,ease: Quart.easeOut});
        }
    );



    //漢堡選單

    var menuOpen = false;

    function menuclose() {
        TweenMax.to($hmenu,0.2,{opacity:'1',left:'100%',ease:Quart.easeOut});
        $('#mask').fadeOut(100);
        $('body,html').css('overflow','auto');
        $btn_ham.removeClass('is-active');

        menuOpen = false;
    }

    $btn_ham.click(
        function(){

            $headerH = $('header').outerHeight(true);
            $headerW = $hmenu.outerWidth(true);
            winW = $win.width();

            $hmenu.css('top',$headerH);

            if(!menuOpen){
                TweenMax.to($hmenu,0.5,{opacity:'1',left:winW-$headerW+50,ease:Quart.easeOut});
                $('#mask').fadeIn(300);
                $('body,html').css('overflow','hidden');
                $(this).addClass('is-active');

                menuOpen = true;
            }else{
                menuclose();
            }
        }
    );

    //ANI


    var KV = new TimelineMax({paused:true,delay:1});
    var sec1 = new TimelineMax({paused:true});
    var sec2 = new TimelineMax({paused:true});
    var sec3 = new TimelineMax({paused:true});
    var sec4 = new TimelineMax({paused:true});
    var icon = [$('.c_box1'),$('.c_box2'),$('.c_box3'),$('.kvcontent')];
    var obj1 = [$('.t1'),$('.t2'),$('.t3'),$('.t4'),$('.t5'),$('.t6')];
    var obj2 = [$('.sec1_item1'),$('.sec1_item3'),$('.sec1_item4'),$('.sec1_item7')];
    var obj3 = [$('.sec1_item2'),$('.sec1_item5'),$('.sec1_item6')];






    KV.from('.kv',1, {opacity:0,ease:Quart.easeOut})
        .set('.map_bg ',{opacity:0,scale:0.8})
        .to('.map_bg',2,{opacity:1,scale:1,ease:Quart.easeOut})
        .staggerFrom(obj1,0.8, {opacity:0,scale:0.8,top:'+=15%',ease:Back.easeOut},0.1,'-=1.5')
        .from('.kv_subtitle_1 ',1, {opacity:0,top:'+=30px',ease:Back.easeOut},'-=1')
        .from('.title_shadow ',0.5, {opacity:0},'-=0.8')
        .from('.subtitlebox',0.5, {opacity:0,top:'-30px',ease:Back.easeOut},'-=0.2')
        .from('.kv_item1 ',0.8, {opacity:0,left:'+=30%',ease:Back.easeOut},'-=0.3')
        .from('.kv_item2 ',0.8, {opacity:0,left:'-=30%',ease:Back.easeOut},'-=0.8')
        .from('.subtitle ',0.8, {opacity:0,ease:Back.easeOut},'-=0.5')
        .from('.t_line1 ',0.5, {opacity:0,top:'-=30%',ease:Back.easeOut},'-=0.5')
        .from('.t_line2 ',0.5, {opacity:0,top:'-=30%',ease:Back.easeOut},'-=0.5')
        .to('.t_line3 ',0.5, {opacity:1,left:'118%',ease:Back.easeOut},'-=0.5')
        .from('.btn_go ',0.8, {opacity:0,left:'-=20%',ease:Back.easeOut,onComplete:function(){
            mapAni = setInterval(mapLoop, setTime);
            mapTrue = true;
            TweenMax.to('.kvinfobox',0.8, {opacity:1});
            kvinfo();
            $('#fix_menu div[data-page='+thispage+']').addClass('select');

        }},'-=0.5');


    sec1.from('.sec1',1.7, {opacity:0,ease:Quart.easeOut})
        .from('.sec1_title',0.5, {opacity:0,top:'-=20px',ease:Back.easeOut},'-=1.5')
        .from('.sec1_subtitle ',0.5, {opacity:0,top:'-=20px',ease:Back.easeOut},'-=1.2')
        .from('.sec1_list_box ',0.5, {opacity:0,top:'-=20px',ease:Back.easeOut},'-=0.8')
        .from('._al',0.5, {opacity:0,left:'-=50px',ease:Back.easeOut},'-=0.8')
        .from('._ar',0.5, {opacity:0,right:'-=50px',ease:Back.easeOut},'-=0.8')
        .from(obj3,0.5, {opacity:0,scale:0.2,ease:Back.easeOut},'-=0.5')
        .from(obj2,0.5, {opacity:0,scale:0.2,ease:Back.easeOut});


    sec2.from('.sec2',1.7, {opacity:0,ease:Quart.easeOut})
        .from('.sec2_inner',0.5, {opacity:0,ease:Back.easeOut},'-=1.5')
        .from('.car_l ',0.5, {opacity:0,left:'-=50px',ease:Quart.easeOut},'-=1.2')
        .from('.car_r ',0.5, {opacity:0,right:'-=50px',ease:Quart.easeOut},'-=1.2')
        .from('.sec2_say',0.5, {opacity:0,left:'-=50px',ease:Back.easeOut},'-=0.5');







    sec3.from('.ProductList .title_page',1, {opacity:0,top:'+=20px',ease:Quart.easeOut})
        .from('.ProductListbtn ',1, {opacity:0,top:'+=20px',ease:Quart.easeOut},'-=0.8')
        .from('.Productbox',1, {opacity:0,top:'+=20px',ease:Quart.easeOut},'-=0.8');

    /* -------------------------------
    slick
   ------------------------------- */

    function slick () {
        $('.slick_fade').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 10000
        });

        $('._slick4').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 800,
            prevArrow:"<div class='btn_ar'></div>",
            nextArrow:"<div class='btn_al'></div>",
            responsive: [
                {
                    breakpoint: 1580,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: { 
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }

            ]
        });

        changeSec1List();
        divHighest();
    }

    setTimeout(slick,700);

    /* -------------------------------
    move
   ------------------------------- */

    var mapN = 0;
    var infobox = true;
    var mapAni;
    var mapRun = false;
    var $mapinfo = $('.kvinfo_box');
    var $dote = $('.kvdote>div');
    var $circleImg = $('.tag_txt>img');
    var setTime = 8000;

    function mapMove(){
        var t = $('.bigtag .tag').offset().top;
        var l = $('.bigtag .tag').offset().left;
        var t1 = $('.map_bg>div').eq(mapN).position().top;
        var l1 = $('.map_bg>div').eq(mapN).position().left;


        $mapinfo.fadeOut(0);
        $mapinfo.eq(mapN).fadeIn(300);
        $circleImg.delay(200).fadeOut(400);
        $circleImg.eq(mapN).delay(200).fadeIn(500);
        $dote.removeClass('select');
        $dote.eq(mapN).addClass('select');
        TweenMax.to('.bigtag',0.5, {opacity:0,scale:0.8,ease:Back.easeOut,onComplete:function(){
            $('.map_bg').css({
                'top':(t - t1)-90,
                'left' : l - l1
            });
            TweenMax.to('.bigtag',0.5, {delay:.7,opacity:1,ease:Back.easeOut,scale:1,onComplete:function(){mapTrue = true;}});
        }});


        console.log('aa');

    }

    function mapLoop(){
        mapTrue = true;
        $('.map_bg').addClass('anistart');
        (mapN < 9)?mapN++:mapN=0;
        mapMove();
    }


    function clearMap(){
        $('.map_bg').removeClass('anistart');
        clearTimeout(mapAni);
    }

    $('.btn_kvar').click(
        function(){
            if(mapTrue){
                mapTrue = false;
                (mapN < 9)?mapN++:mapN=0;
                clearMap();
                $('.map_bg').addClass('anistart');
                mapMove();
            }

            //            mapAni = setInterval(mapLoop, setTime);
        }
    );

    $('.btn_kval').click(
        function(){
            if(mapTrue){
                mapTrue = false;
                (mapN > 0)?mapN--:mapN=9;
                clearMap();
                $('.map_bg').addClass('anistart');
                mapMove();
            }
            //            mapAni = setInterval(mapLoop, setTime);
        }
    );

    $dote.click(
        function(){
            console.log(mapTrue);
            if(mapTrue){
                mapTrue = false;
                clearMap();
                $('.map_bg').addClass('anistart');
                mapN = $(this).index();
                mapMove();
            }
            //            mapAni = setInterval(mapLoop, setTime);
        }
    );
    function kvinfo(){
        if(infobox){
            $('.kvinfobox').css('left','-460px');

            $('.kvinfobox .btn').removeClass('open');
            infobox = false;
        }else{
            $('.kvinfobox').css('left','0');
            $('.kvinfobox .btn').addClass('open');
            infobox = true;
        }
    }

    kvinfo();
    $('.kvinfobox .btn').click(kvinfo);
    $('.kvinfobox').hover(
        function(){
            clearMap();
        },function(){
            mapAni = setInterval(mapLoop, setTime);
        }
    );



    /* -------------------------------
    SEC2
   ------------------------------- */
    var $btn_al = $('._al'), 
        $btn_ar = $('._ar'),
        $sec1_content = $('.sec1_inner_box .sec1_inner'),
        listN = 0;

    TweenMax.set($sec1_content, {opacity:'0',ease: Quart.easeOut});
    function changeSec1List (){
        $('.arrowtxt').each(
            function(i,obj){
                $(obj).find('div').fadeOut(0);
                $(obj).find('div').eq(listN).fadeIn(0);
            }
        );
        TweenMax.to($sec1_content,0.5, {opacity:'0',zIndex:'0',ease: Quart.easeOut});
        TweenMax.to($sec1_content.eq(listN),0.5, {opacity:'1',zIndex:'100',ease: Quart.easeOut});
        $('.slick_fade').slick('slickGoTo', 0);
        $btn_m.removeClass('select');
        $('#fix_menu div[data-page='+thispage+'][data-list='+listN+']').addClass('select');
    }


    $btn_ar.click(function(){
        (listN < $sec1_content.length-1)?listN++:listN=0;
        changeSec1List();
        console.log(listN);

    });

    $btn_al.click(function(){
        (listN > 0)?listN--:listN=$sec1_content.length-1;
        changeSec1List();
        console.log(listN);

    });


    function divHighest(){
        var maxHeight = 0;
        $('.sec1_inner').each(function() {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
            console.log( $(this).height() );
        });
        $('.sec1_inner_box').height(maxHeight);
    }


    /* -------------------------------
    scroll
   ------------------------------- */
    var $btn_m = $('#fix_menu div');
    var _pos = 1000,
        thispage = 0,
        pageT = [],
        ah = $('#maincontainer').outerHeight(true),
        $sec = $('.sec');

    var allSection = [KV, sec1, sec2, sec3];

    //    捲動
    function scrollPage(wt, whelf) {
        winH = $win.height();
        wt = $win.scrollTop();
        whelf = winH / 2;
        for (var p = 0; p < $sec.length; p++) {
            if (wt > pageT[p] - whelf && wt < pageT[p + 1] - whelf) {
                thispage = p;
            }
        }
        $btn_m.removeClass('select');

        if(thispage == 1){
            $('#fix_menu div[data-page='+thispage+'][data-list='+listN+']').addClass('select');
        }else{
            $('#fix_menu div[data-page='+thispage+']').addClass('select');
        }
    }


    //    重製
    function pageReset() {
        pageT = [];
        ah = $('#maincontainer').outerHeight(true);
        $sec.each(
            function(i, obj) {
                var t = $(obj).offset().top;
                pageT.push(t);
                if (i == $sec.length - 1) {
                    pageT.push(ah);
                }
            }
        );
    }


    $btn_m.click(
        function () {
            pageReset();
            var n = $(this).data('page');
            listN = $(this).data('list');
            $btn_m.removeClass('select');
            $(this).addClass('select');
            TweenMax.to('body,html',.8,{scrollTop:pageT[n],ease:Quart.easeOut});
            //            menuclose();
            changeSec1List();
        }
    );
    $('.btn_go').click(
        function() {
            pageReset();
            var n = $(this).data('page');
            TweenMax.to('body,html',.8,{scrollTop:pageT[n],ease:Quart.easeOut});
        }
    );


    $('#mask').fadeOut(0);
    function _resize() {
        $headerH = $('header').outerHeight(true);
        winW = $win.width();
        menuOpen = false;
        $btn_ham.removeClass('is-active');
        $('body,html').css('overflow','auto');
        if(winW <= _media){
            $hmenu.addClass('m_menu');
            $btn_ham.css('display','block');
            $hmenu.css('top',$headerH);
            $hmenu.css('left','100%');

        }else{
            $hmenu.removeClass('m_menu');
            $hmenu.attr('style','');
            $btn_ham.css('display','none');
            $('#mask').fadeOut(0);
        }
        clearMap();
        setTimeout( divHighest ,100);
        setTimeout( mapMove ,100);

        if(mapTrue)
            mapAni = setInterval(mapLoop, setTime);


    }

    $win.scroll(
        function() {
            var st = $(this).scrollTop();
            winH = $win.height();
            if (st < winH / 4) {
                $btn_top.fadeOut(200);
            } else {
                $btn_top.fadeIn(200);
            }

            scrollPage();
            pageReset();
            //動態
            $('.sec').each(function(i) {
                var imagePos = $(this).offset().top;
                if (imagePos < st + (winH * 0.9)) {
                    allSection[i].play();
                }
            });
            $('#mask').fadeOut(0);

        }

    );

    _resize();
    $win.resize(_resize);
});
