$(function(){
    console.log('545')
    var apphome = $('.apphome')
    var apphome_cont = $('.apphome .cont')
    var apphome_diaCont = $('.apphome .diaCont')
    // var imgs = $('img')
    var flytoyesindex = 0
    var flytoyesall = parseInt(Math.random()*10)
    var appother = $('.appother')
    var appbtm = $('.appbtm')
    // console.log(appbtm)
    appbtm.find('.l').click(function(){
        apphome.addClass('active');
        appother.removeClass('active');
        apphome_diaCont.html('')
        apphome_cont.addClass('active')
        apphome_diaCont.removeClass('active')
        appother.html('')
    });
    appbtm.find('.r').click(function(){
        apphome.removeClass('active');
        appother.addClass('active');
        apphome_diaCont.html('')
        var audiosrc = 'imgs/hhh.mp3'
        var imgsrc = 'imgs/bug.jpg'
        var audio = $('<audio class="diaContAudio"  controls="controls" preload ><source src="'+ audiosrc +'" type="audio/ogg"></audio><img src="'+ imgsrc +'" alt="">')
        appother.html(audio)
        setTimeout(() => {
            var diaContAudio = $('.diaContAudio')
            diaContAudio[0].play();
            $('img').click(function(){
                appother.html('')
                apphome_cont.addClass('active')
                apphome_diaCont.removeClass('active')
                apphome.addClass('active');
                appother.removeClass('active');
            })
        }, 100);
    });
    apphome.find('.flytoyes').mouseover(function(){
        var self = this;
        var wH = $(window).height();
        var wW = $(window).width();
        var smH = $(self).height();
        var smW = $(self).width();
        var fX = $(self).offset().left;
        var fY = $(self).offset().top;
        
        var selH = wH - smH - 50 //高度差
        var selW = wW - smW - 50 //宽度差
        function biginRandom(){
            var ranX = parseInt(selW*Math.random())
            var ranY = parseInt(selH*Math.random())
            if(((ranX>fX) && (ranX< (fX+ smW))) || ((ranY>fY) && (ranX< (fY+ smH)))){
                biginRandom();
            }else{
                console.log(ranX,ranY)
                $(self).css({
                    position:'absolute',
                    left:ranX+'px',
                    top:ranY+'px',
                    transition:'all 0.5s'
                });
                flytoyesindex++
        
                if(flytoyesindex > flytoyesall){
                    var audiosrc = 'imgs/yous.mp3'
                    var imgsrc = 'imgs/youseesee.jpg'
                    var audio = $('<audio class="diaContAudio"  controls="controls" preload ><source src="'+ audiosrc +'" type="audio/ogg"></audio><img src="'+ imgsrc +'" alt="">')
                    apphome_cont.removeClass('active')
                    apphome_diaCont.addClass('active')
                    apphome_diaCont.html(audio)
                    setTimeout(() => {
                        flytoyesindex = 0;
                        flytoyesall = parseInt(Math.random()*10);
                        var diaContAudio = $('.diaContAudio')
                        diaContAudio[0].play();
                        $('img').click(function(){
                            apphome_diaCont.html('')
                            apphome_cont.addClass('active')
                            apphome_diaCont.removeClass('active')
                        })
                    }, 100);
                    
                }
            }
        }
        biginRandom();
        
        
    })
    
    apphome.find('.flytoyes').click(function(){
        
    })
    apphome.find('.nono').click(function(){
        var audiosrc = 'imgs/yucunderenlei.mp3'
        var imgsrc = 'imgs/kanshazi.jpg'
        var audio = $('<audio class="diaContAudio"  controls="controls" preload ><source src="'+ audiosrc +'" type="audio/ogg"></audio><img src="'+ imgsrc +'" alt="">')
        apphome_cont.removeClass('active')
        apphome_diaCont.addClass('active')
        apphome_diaCont.html(audio)
        setTimeout(() => {
            var diaContAudio = $('.diaContAudio')
            diaContAudio[0].play();
            $('img').click(function(){
                apphome_diaCont.html('')
                apphome_cont.addClass('active')
                apphome_diaCont.removeClass('active')
            })
        }, 100);
    })
    // imgs.click(function(){
        
    // })
    // apphome.find('.flytoyes').mouseover(function(){
    //     console.log('wH,wW,smH,smW')
    //   });
})