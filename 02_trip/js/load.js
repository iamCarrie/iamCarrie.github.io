
/*----------------------
    Var
----------------------*/


var $win = $(window),
    WinW = $win.width(),
    WinH = $win.height();


/*----------------------
   Prototype
----------------------*/
var myLightBox = function(){

    var $this = {};

    $this.Click = function (e) {
        e.preventDefault();
        var _thisName = $(this).attr('lb-name');
        var $lightbox = $('<div />').appendTo('body');
        $lightbox.fadeOut(0).attr('class', 'lightbox-bg').load('incloud/lightbox.html div[lb-name ="'+_thisName+'"]', function () {
            //before do
            $(this).fadeIn(200);

            //after do scroll
            //        $("._scroll").mCustomScrollbar();
            //        $("._scroll", this).mCustomScrollbar("update");

            //after do something
            if(_thisName == 'btn_01'){console.log('btn_01 hello');}
            if(_thisName == 'btn_02'){console.log('btn_02 hello');}
            if(_thisName == 'btn_03'){console.log('btn_03 hello');}
            if(_thisName == 'btn_04'){console.log('btn_04 hello');}
            if(_thisName == 'btn_05'){console.log('btn_05 hello');}


            //close
            $('.btn_lb_x').click($this.close);
            $('.lightbox-bg').click(
                function(e){
                    if (e.target !== this)return;
                    $this.close();
                }
            );
        });
    }

    $this.close = function () {
        var $lightbox = $('.lightbox-bg');
        TweenMax.to($lightbox, 0.5, {
            alpha: 0,
            ease: Back.easeOut,
            onComplete: function () {
                $lightbox.remove();
            }
        });
    }
    return $this;
}




$(function () {

//    var myScript = {
//        load : myLoad(),
//        lb : myLightBox()
//    };
    //myScript.load = function(){console.log(123);};
//    $('.btn_lb').click(myScript.lb.Click);
    //myScript.load();

});