/**
 * Created by chexingyou on 2015/5/29.
 */
(function(jQuery){

    var $ = jQuery
    var ImageViewer = {}

    ImageViewer.bindImageEvent = function(imgs){

        imgs.on('mouseover',function(){
            var $this = $(this)
            $this.css('cursor','zoom-in')
        }).on('click',function(){
            var $this = $(this),
                imgSrc = $this.attr('src').replace(/width=\d+[&]{0,1}|height=\d+[&]{0,1}/img,"")

            var _scrollHeight = $(document).scrollTop(),//获取当前窗口距离页面顶部高度
                _windowHeight = $(window).height(),//获取当前窗口高度
                _windowWidth = $(window).width()//获取当前窗口宽度

            $(document.body).css({
                overflow : 'hidden'
            })

            $('<div id="J_ImageViewer"/>')
                .appendTo('body')
                .css({
                    position : 'absolute',
                    top:  _scrollHeight,
                    left : 0,
                    height :$(window).height()-20 ,
                    lineHeight :'768px' ,
                    width : $(window).width(),
                    cursor : 'pointer',
                    background : 'url("/libs/plugins/Image-Viewer-plugin-1.0/close.png") no-repeat scroll 98% 16px transparent',
                    zIndex : 99999,
                    overflow : 'auto'
                })
                .append($('<div></div>')
                    .css({
                        position : 'absolute',
                        width:1024,
                        height:768,
                        maxWidth : 1024,
                        maxHeight:768,
                        lineHeight : 768,
                        top : (_windowHeight - 768)/2,
                        left : (_windowWidth - 1024)/2,
                        margin : '0 auto'
                    })
                    .append($('<img src="' + imgSrc + '"/>').css({
                        cursor:'zoom-out',
                        display : 'block',
                        margin : '0 auto',
                        width: '100%',
                        maxHeight: '100%'
                    })))
                .on('click',function(){
                    $(this).remove()
                    $('#J_ImageViewer_Img').remove()
                    $(document.body).css({
                        overflow : 'auto'
                    })
                })

        })
    }

    window.ImageViewer = ImageViewer

})(jQuery);
