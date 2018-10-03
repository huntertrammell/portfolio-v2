//animation function for intro, moves text after 3seconds up and shows rest of text
var intro_title = $('.intro-title')
var summary = $('.summary')
summary.hide()
setTimeout(function(){
    intro_title.removeClass('zoomIn')
    intro_title.addClass('slideOutUp')
    summary.show()
    summary.addClass('fadeInLeft')
},3000)
$('.intro-nav').on('click',function(){
    summary.hide()
    intro_title.removeClass('fadeInLeft')
    intro_title.removeClass('slideOutUp')
    intro_title.addClass('zoomIn')
    setTimeout(function(){
        intro_title.removeClass('zoomIn')
        intro_title.addClass('slideOutUp')
        summary.show()
        summary.addClass('fadeInLeft')
    },3000)
})