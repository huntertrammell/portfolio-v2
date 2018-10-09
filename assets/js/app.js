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

//creating obj array for Projects page
const Projects = [{
    dragonball_RPG: {
        img: "insert link here",
        title: "Dragonball RPG",
        summary: "A click-based game that simulates fights between characters",
        description: "The first thing that came to my mind when making a figher RPG game was dragonball. I am a huge fan of the series(plural) so it was only natural that I went with this theme. The object of the game is to defeat all opponents available without dying first. Each fighter has a specific attack, counter, and health assigned so it is possible to loose or win with any character depending on the order you select your opponents.",
        tech: "{ HTML / Bootstrap / CSS / Javascript / jQuery }",
        repo: "insert github link here",
        link: "insert project link here"
    },
    trivia_Game: {
        img: "insert link here",
        title: "Videogame Trivia",
        summary: "A timed trivia game",
        description: "Windows XP, oh the aestetic appeal of the no longer supported operating system. Questions and corresponding answers are randomly generated onto the page, after you answer (or fail to within the timer) it will display the results on the page and track your progress. After your round is over you can choose to play again and it will add 1 to the round tracker and generate another random set of questions.",
        tech: "{ HTML / Bootstrap / CSS / Javascript / jQuery }",
        repo: "insert github link here",
        link: "insert project link here"
    },
    gif_Generator: {
        img: "insert link here",
        title: "Gif Generator",
        summary: "When a button is clicked, corresponding gifs will appear on the page",
        description: "I preloaded some GIF search parameters onto the page. If you click the add button you can manually add in your own GIF's and after clicking the button generated it will show the images. On click the gif will either play or stop. The page calls to the GIPHY API and retrieves daat based on the query dictated by the user.",
        tech: "{ HTML / Bootstrap / CSS / Javascript / jQuery / API }",
        repo: "insert github link here",
        link: "insert project link here"
    },
    train_Scheduler: {
        img: "insert link here",
        title: "Train Scheduler",
        summary: "An app that converts and displays time onto the webpage",
        description: "This is a boring theme, but what it does is quite cool. A user enters information about their train using the input form, that data is collected and passed into firebase and converted using moment.js then put onto the page. All the data is persistant to unless removed from the DB direclty it will show any and all submissions entered above on page load.",
        tech: "{ HTML / Bootstrap / CSS / Javascript / jQuery / Moment.js / Firebase }",
        repo: "insert github link here",
        link: "insert project link here"
    },
    films_With_Friends: {
        img: "insert link here",
        title: "Films with Friends",
        summary: "A site that helps you plan the perfect movie night",
        description: "This is one of my favorite projects I have done to date. When a user visits the site, they enter in a bit of contact info and select ratings and a genre. Once they submit the contact data is stored in firebase and the ratings and genre are passed to TMDB's API and 5 random movies are generated on the page. The user can choose to keep the generated options or swap out with their own movies. After they have confirmed their selection the movie data is pushed to firebase and they are prompted to invite their friends. emailJS API sends out an email to evereyone inviting them to vote. Once they enter the access code from the email, they can vote on their choice, and after all votes are received a final email is sent out announcing the winner.",
        tech: "{ HTML / Bootstrap / CSS / Javascript / jQuery / Moment.js / animate.css / API / Firebase }",
        repo: "insert github link here",
        link: "insert project link here"
    },
    liri_Bot: {
        img: "insert link here",
        title: "Under Construction",
        summary: "",
        description: "Still working on this project and will update once completed!",
        tech: "{  }",
        repo: "insert github link here",
        link: "insert project link here"
    },

}]