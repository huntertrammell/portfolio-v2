//animation function for intro, moves text after 2 seconds up and shows rest of text
var intro_title = $('.intro-title')
var summary = $('.summary')
summary.hide()
setTimeout(function(){
    $('.profile').hide()
    intro_title.removeClass('zoomIn')
    intro_title.addClass('slideOutUp')
    summary.show()
    summary.addClass('fadeIn')
},2000)
$('.intro-nav').on('click',function(){
    summary.hide()
    $('.profile').show()
    intro_title.removeClass('fadeIn')
    intro_title.removeClass('slideOutUp')
    intro_title.addClass('zoomIn')
    setTimeout(function(){
        $('.profile').hide()
        intro_title.removeClass('zoomIn')
        intro_title.addClass('slideOutUp')
        summary.show()
        summary.addClass('fadeIn')
    },2000)
})
$(document).ready(function(){
    //Applies animation to the programming icons on homepage
    //used .img-X as class for all icons this will target each once on setInterval
    let imgNum = 1
    //this will target previous animation to remove clase
    let prevImgNum = 0
    //function for adding and removing bounce
    function bounce(){
        //condition to tell function to reset img number
        if (imgNum==8) {
            imgNum = 1
            prevImgNum = 0
            $('.img-7').removeClass('bounce').removeClass('fadeIn')
        }
        let caption = $('.caption')
        caption.removeClass('fadeIn')
        let captionText = $('.img-' + imgNum).data('img')
        //adds X number to .img- class based on count above and is incremented at bottom
        let prevImg = $('.img-' + prevImgNum)
        prevImg.removeClass('bounce')
        let curImg = $('.img-' + imgNum)
        curImg.addClass('bounce')
        caption.text(captionText)
        imgNum++
        prevImgNum++
        console.log(imgNum)
        caption.addClass('fadeIn')
    }
    //calling function
    setInterval(bounce, 3000)
})