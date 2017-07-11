var $win = $(window),
    winW = $win.width(),
    winH = $win.height();
_media = 1023;


var $btn_sec1 = $('.kvbtn .btn'),
    $btn_dote = $('.dotebox li'),
    thisfoto = 0;
var fotoRunStart;

var $kvtxtlist = $('.kvtxtlist img'),
    $mkvtxtlist = $('.m_kvtxtlist img'),
    $fotolist = $('.fotolist img');

var $btn_top = $('.btn_top');
var $btn_go = $('.btn_gobox');
var $headerH = $('header').height(),
    $headerW = $('header').outerWidth(true),
    $hmenu = $('#headercontent'),
    $btn_ham = $('.hamburger');


var $main = $('#maincontainer'),
    countImages = $('body img').size();





$(function () {


    $('body').imagesLoaded()
        .always( function() {
        TweenMax.to('#loading',1,{display:'none',opacity:0,delay:.2,ease:Quart.easeOut});
        TweenMax.set($main,{display:'block',ease:Quart.easeOut,onComplete:
                            function(){
                                KV.seek(0);
                                sec1.seek(0);
                                sec2.seek(0);
                                KV.stop(0);
                                sec1.stop(0);
                                sec2.stop(0);
                                KV.play();
                            }});

    });

    $btn_top.fadeOut(0);
    $kvtxtlist.fadeOut(0);
    $mkvtxtlist.fadeOut(0);
    $fotolist.fadeOut(0);
    $kvtxtlist.eq(thisfoto).fadeIn(0);
    $mkvtxtlist.eq(thisfoto).fadeIn(0);
    $fotolist.eq(thisfoto).fadeIn(0);
    $btn_dote.eq(thisfoto).addClass('select');

    /*-------------- 
        KV 
    --------------*/

    function scrollTo(){
        var $stroke = $('#stroke'),
            thistop = $stroke.offset().top;
        TweenMax.to('body,html',.8,{scrollTop:thistop,ease:Quart.easeOut});
    }
    function changeFoto(){
        $kvtxtlist.fadeOut(0);
        $mkvtxtlist.fadeOut(0);
        $fotolist.fadeOut(300);
        $btn_dote.removeClass('select');
        $kvtxtlist.eq(thisfoto).fadeIn(600);
        $mkvtxtlist.eq(thisfoto).fadeIn(600);
        $fotolist.eq(thisfoto).fadeIn(600);
        $btn_dote.eq(thisfoto).addClass('select');
    }
    function fotoRun(){
        if(thisfoto < $fotolist.length-1){thisfoto++;}else{thisfoto=0;}
        changeFoto();
    }


    $btn_dote.click(
        function(){
            var n = $(this).index();
            thisfoto = n;
            changeFoto();
        }
    );
    $btn_dote.hover(
        function(){clearInterval(fotoRunStart);},
        function(){fotoRunStart = setInterval(fotoRun, 4000);}
    );


    $btn_go.click(scrollTo);
    $btn_sec1.click(scrollTo);

    $btn_top.click(
        function(){
            TweenMax.to('body,html',.8,{scrollTop:0,ease:Quart.easeOut});
        }
    );

    /*-------------- 
        flower
    --------------*/

    var thisNo = 0,
        thisInfo = 0;

    var $flowerInfo = $('.flower_info'),
        $btn_no = $('.flower_btnbox .btn');

    var $flower_list = $('.flower_list'),
        $flower_list_title = $('.flower_list_title span'),
        $list_foto = $('.list_foto img'),
        $flower_list_info = $('.flower_list_info span'),
        $flower_list_dote = $('.flower_list_dote li');


    //右側按鈕

    function infoReset(){
        thisInfo = 0;
        $flower_list_title.fadeOut(0);
        $list_foto.fadeOut(0);
        $flower_list_info.fadeOut(0);
        $flower_list_dote.removeClass('select');
        $flower_list.each(function(i,obj){
            var obj = $(obj);
            obj.find('.flower_list_title span').eq(thisInfo).fadeIn(0);
            obj.find('.list_foto img').eq(thisInfo).fadeIn(0);
            obj.find('.flower_list_info span').eq(thisInfo).fadeIn(0);
            obj.find('.flower_list_dote li').eq(thisInfo).addClass('select');
        })
    }
    function changeInfo(){
        var $thisbox = $flowerInfo.eq(thisNo),
            $infoTitle = $thisbox.find('.flower_list_title span'),
            $infoImg = $thisbox.find('.list_foto img'),
            $info = $thisbox.find('.flower_list_info span'),
            $dote = $thisbox.find('.flower_list_dote li');

        $infoTitle.fadeOut(0);
        $infoImg.fadeOut(0);
        $info.fadeOut(0);
        $flower_list_dote.removeClass('select');
        $infoTitle.eq(thisInfo).fadeIn(600);
        $infoImg.eq(thisInfo).fadeIn(600);
        $info.eq(thisInfo).fadeIn(600);
        $dote.eq(thisInfo).addClass('select');
    }

    $flower_list_dote.click(function(){
        var n = $(this).index();
        thisInfo = n;
        changeInfo();
    });


    infoReset();

    //左側按鈕
    $flowerInfo.fadeOut(0);
    $flowerInfo.eq(thisNo).fadeIn(0);
    $btn_no.eq(thisNo).addClass('select');

    function changeNum(){
        var $this = $(this).index();
        thisNo = $this;
        $flowerInfo.fadeOut(0);
        $btn_no.removeClass('select');
        $flowerInfo.eq(thisNo).fadeIn(600);
        $btn_no.eq(thisNo).addClass('select');
        infoReset();
    }
    $btn_no.click(changeNum);


    //漢堡選單
    var menuOpen = false;

    $btn_ham.click(
        function(){

            $headerH = $('header').outerHeight(true);
            $headerW = $hmenu.outerWidth(true);
            winW = $win.width();
            $(this).toggleClass('is-active');
            $hmenu.css('top',$headerH);

            if(!menuOpen){
                TweenMax.to($hmenu,0.5,{opacity:'1',left:winW-$headerW,ease:Quart.easeOut});
                menuOpen = true;
            }else{
                TweenMax.to($hmenu,0.5,{opacity:'1',left:'100%',ease:Quart.easeOut});
                menuOpen = false;
            }
        }
    );

    //ANI


    var KV = new TimelineMax({paused:true,delay:0.5});
    var sec1 = new TimelineMax({paused:true,delay:0.5});
    var sec2 = new TimelineMax({paused:true,delay:0.5});

     TweenMax.from('.btn_cat',1.3, {rotation:-10,delay:.5,repeat:-1,yoyo:true,ease:Linear.easeOut});



    KV.from('.bg1',1, {opacity:0,scale:0.9,left:'-=20px',top:'-=20px',ease:Quart.easeOut})
        .from('.bg2',1, {opacity:0,scale:0.9,left:'+=20px',top:'-=20px',ease:Quart.easeOut},'-=1')
        .from('.bg3',1, {opacity:0,scale:0.9,right:'-=20px',top:'-=20px',ease:Quart.easeOut},'-=1')
        .from('#kvtitle',1.5, {opacity:0,top:'+=20px',ease:Quart.easeOut},'-=0.3')
        .from('#kvtxt',1.5, {opacity:0,top:'+=20px',ease:Quart.easeOut},'-=0.8')
        .from('#kvfoto',1.5, {opacity:0,left:'-=10px',top:'-=10px',ease:Quart.easeOut,onComplete:
                            function(){
                                fotoRunStart = setInterval(fotoRun, 4000);
                            }},'-=1.5')
        .from('.btn_gobox',1.3, {opacity:0,scale:0.9,ease:Back.easeOut},'-=0.8');

    sec1.staggerFrom('.bgf .bg',0.5, {opacity:0,top:'-=20px',ease:Quart.easeOut},0.2)
        .from('.flower_btnbox',1, {opacity:0,top:'+=20px',ease:Quart.easeOut},'-=1.3')
        .from('.flower_box ',1, {opacity:0,top:'+=20px',ease:Quart.easeOut},'-=0.8')
        .from('.flower_list',1, {opacity:0,top:'+=20px',ease:Quart.easeOut},'-=0.8');

    sec2.staggerFrom('.bgf2 .bg',0.5, {opacity:0,top:'-=20px',ease:Quart.easeOut},0.2)
        .from('.bg5',1, {opacity:0,scale:0.9,left:'-=20px',top:'-=20px',ease:Quart.easeOut},'-=0.5')
        .from('.title_stroke',1, {opacity:0,top:'+=20px',ease:Quart.easeOut},'-=1')
        .from('.stroke_btn,.sub_stroke_btn',1, {opacity:0,top:'+=20px',ease:Quart.easeOut},'-=0.8')
        .from('.stroke_list',1, {opacity:0,top:'+=20px',ease:Quart.easeOut},'-=0.8');



    /* -------------------------------
    scroll
   ------------------------------- */
    var _pos = 1000,
        thispage = 0,
        pageT = [],
        ah = $('#maincontainer').outerHeight(true),
        $sec = $('.sec');

    var allSection = [KV,sec1,sec2];

    //    捲動
    function scrollPage(wt, whelf){
        winH = $win.height();
        wt = $win.scrollTop();
        whelf = winH/2;
        for(var p = 0 ; p < $sec.length ; p++){
            if(wt > pageT[p]-whelf && wt < pageT[p+1]-whelf){
                thispage = p;
            }
        }
    }


    //    重製
    function pageReset(){
        pageT = [];
        ah = $('#maincontainer').outerHeight(true);
        $sec.each(
            function(i,obj){
                var t = $(obj).offset().top;
                pageT.push(t);
                if(i == $sec.length-1){pageT.push(ah);}
            }
        );
    }







    function _resize(){
        $headerH = $('header').outerHeight(true);
        winW = $win.width();
        menuOpen = false;
        $btn_ham.removeClass('is-active');
        if(winW <= _media){
            $hmenu.addClass('m_menu');
            $btn_ham.css('display','block');
            $hmenu.css('top',$headerH);
            $hmenu.css('left','100%');

        }else{
            $hmenu.removeClass('m_menu');
            $hmenu.attr('style','');
            $btn_ham.css('display','none');
        }
    }

    $win.scroll(
        function(){
            var st = $(this).scrollTop();
            winH = $win.height();
            if(st < winH/4){$btn_top.fadeOut(200);}else{$btn_top.fadeIn(200);}

            scrollPage();
            //動態
            $('.sec').each(function(i){
                var imagePos = $(this).offset().top;
                if (imagePos < st+(winH*0.9)) {
                    allSection[i].play();
                }
            });

        }
    );
    _resize();
    $win.resize(_resize);
});
