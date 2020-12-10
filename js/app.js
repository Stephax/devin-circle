$(window).on("load resize", function () {
    // header slick
    if ($(window).width() < 769) {
        $('.header-slick').not('.slick-initialized').slick({
            mobileFirst: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            speed: 300,
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: "0px",
            responsive: [{
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
                breakpoint: 768,
                settings: "unslick",
            }],
        });
    }
    // Hired slick
    $(".hired").not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="40.983" height="14.651" viewBox="0 0 40.983 14.651" fill="#9f9f9f" class="slick-next">
                        <path class="a" d="M10.613,6,9.491,7.291l4.443,5.119H-24v1.831H13.934L9.491,19.36l1.123,1.291,6.37-7.326Z" transform="translate(24 -6)"/>
                        </svg>`,
        prevArrow: `<svg width="40.983" height="14.651" viewBox="0 0 41 15" version="1.1" fill="#9f9f9f" class="slick-prev">
                        <path d="M6.371,0l1.122,1.291l-4.443,5.119l37.934,0l0,1.831l-37.934,0l4.443,5.119l-1.123,1.291l-6.37,-7.326l6.371,-7.325Z" style="fill:#9f9f9f;fill-rule:nonzero;"/>
                        </svg>`,
        responsive: [{
            breakpoint: 992,
            settings: "unslick"
        }]
    });
    $('.slick-next, .slick-prev').appendTo('.slick-arrows');

    if ($(window).width() < 1481) {
        $("#marketing-title").prependTo("#marketing-row")
        $("#techno-title").prependTo("#techno-row")
    } else if ($(window).width() > 1480) {
        $("#marketing-title").prependTo("#marketing-row .card-deck")
        $("#techno-title").prependTo("#techno-row .card-deck")
    }


});

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
}

$(window).one('scroll', function isInVierport() {
    let proffesionals = new countUp.CountUp('proffesionals', 100, {
        duration: 5
    });
    proffesionals.start();

    let offices = new countUp.CountUp('offices', 3, {
        duration: 5
    });
    offices.start();

    let countries = new countUp.CountUp('countries', 2, {
        duration: 5
    });
    countries.start();

    let revenue = new countUp.CountUp('revenue', 7.3, {
        decimalPlaces: 1,
        duration: 5,
        decimal: ','
    });
    revenue.start();
});

// Clock
setInterval(setClock, 1000)
const hourPointers = document.getElementsByClassName('js-hours-pointer')
const minutePointers = document.getElementsByClassName('js-minutes-pointer')
const secondPointers = document.getElementsByClassName('js-seconds-pointer')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    for (let hourPointer of hourPointers) {
        setRotation(hourPointer, hoursRatio)
    }
    for (let minutePointer of minutePointers) {
        setRotation(minutePointer, minutesRatio)
    }
    for (let secondPointer of secondPointers) {
        setRotation(secondPointer, secondsRatio)
    }
};

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
};

// Aos animation init
AOS.init();

var items = ["<p class='main-title'>rocking <b>strategy</b></p>", "", "<span class='brackets-text'>custom tools<span>", "<span class='brackets-text'>automation</span>", "<span class='brackets-text'>ai & big data</span>", "<span class='brackets-text'>marktech</span>",
    "", "<p class='brackets-title'>cutting edge <b>innovations</p>", "<span class='brackets-text pros-text'>digital transformation</span>", "<span class='brackets-text pros-text'>business consulting</span>", "<span class='brackets-text pros-text'>leaders mentoring</span>", "<span class='brackets-text pros-text'>startup ideas validation</span>", "<span class='brackets-text pros-text'>business transformation</span>", "<span class='triad-text pros-text'>brand consulting</span>",
    "", "<p class='brackets-title triad-title pros-title'>business and transformation <b>consulting</b></p>", "<span class='triad-text pros-text'>optimization</span>", "<span class='triad-text pros-text'>kpis consulting</span>", "<span class='triad-text pros-text'>learning</span>", "<span class='triad-text pros-text'>reports</span>", "<span class='triad-text pros-text'>print</span>",
    "", "<p class='triad-title pros-title'>optimizing <b>results & effectivity</b></p>", "", "<span class='triad-text'>influencers</span>", "<span class='triad-text'>media buying</span>", "<span class='triad-text'>digital & social media</span>", "<span class='triad-text'>media creativity</span>", "<span class='triad-text'>tv commercials</span>",
    "<p class='triad-title'>new way of <b>media & execution</b></p>", "", "<span class='triad-text'>special solutions</span>", "<span class='triad-text'>brand workshops</span>", "<span class='triad-text'>strategic creativity</span>", "<span class='triad-text'>creative concepts</span>", "<span class='triad-text'>big ideas</span>",
    "<p class='triad-title'>goal oriented <b>creativity</b></p>", "", "<span class='triad-text'>market rollout plan</span>", "<span class='triad-text'>brand positioning</span>", "<span class='triad-text'>segmentation targeting</span>", "<span class='triad-text'>market analysis</span>", "<span class='triad-text'>research research</span>", "",
];
var firstCol = items.slice(0, 6);
var secondCol = items.slice(7, 15);
var thirdCol = items.slice(15, 22);
var fourthCol = items.slice(22, 29);
var fifthCol = items.slice(29, 36);
var sixthCol = items.slice(36, 43);

if ($(window).width() > 1300) {
    var length = items.length
    var stred = 500;
    var polomer = 550;
    for (var i = 0; i < length; i++) {
        var text = items[i]
        var x = stred + polomer * Math.sin(2 * Math.PI * -((i) / length));
        var y = stred + polomer * Math.cos(2 * Math.PI * -(i) / length);

        $("#center").append("<div class='point' style='left:" + x + "px;bottom:" + y + "px' data-aos='fade-up'><p>" + text + "</p></div>");
    }
} else if ($(window).width() < 1300) {


    firstCol.forEach(function (item) {
        $(".texts-1").append("<p>" + item + "</p>");
    })
    secondCol.forEach(function (item) {
        $(".texts-2").append("<p>" + item + "</p>");
    })
    thirdCol.forEach(function (item) {
        $(".texts-3").append("<p>" + item + "</p>");
    })
    fourthCol.forEach(function (item) {
        $(".texts-4").append("<p>" + item + "</p>");
    })
    fifthCol.forEach(function (item) {
        $(".texts-5").append("<p>" + item + "</p>");
    })
    sixthCol.forEach(function (item) {
        $(".texts-6").append("<p>" + item + "</p>");
    })

    $(".flex").appendTo("#circle")
}
$(".triad-logo").on("mouseenter", function () {
    $(".triad-text").addClass("triad-active");
    $(".triad-title").addClass("triad-title-active");
})

$(".triad-logo").on("mouseleave", function () {
    $(".triad-text").removeClass("triad-active");
    $(".triad-title").removeClass("triad-title-active");
})
$(".pros-logo").on("mouseenter", function () {
    $(".pros-text").addClass("pros-active");
    $(".pros-title").addClass("pros-title-active")
})
$(".pros-logo").on("mouseleave", function () {
    $(".pros-text").removeClass("pros-active");
    $(".pros-title").removeClass("pros-title-active")
})
$(".brackets-logo").on("mouseenter", function () {
    $(".brackets-text").addClass("brackets-active");
    $(".brackets-title").addClass("brackets-title-active")
})
$(".brackets-logo").on("mouseleave", function () {
    $(".brackets-text").removeClass("brackets-active");
    $(".brackets-title").removeClass("brackets-title-active")
})


var bracketTimer;

function repeatBrackets() {
    $(".brackets-text").toggleClass("brackets-active")
    bracketTimer = setTimeout(repeatBrackets, 2500);
    $(".brackets-logo").on("mouseenter", function(){
        clearTimeout(bracketTimer)
    }).on("mouseleave", function(){
        bracketTimer = setTimeout(repeatBrackets, 2500);
    })
}
setTimeout(repeatBrackets, 2000);

var triadTimer;
function repeatTriad(){
    $(".triad-text").toggleClass("triad-active")
    triadTimer = setTimeout(repeatTriad, 2500);
    $(".triad-logo").on("mouseenter", function(){
        clearTimeout(triadTimer)
    }).on("mouseleave", function(){
        triadTimer = setTimeout(repeatTriad, 2500);
    })
}
setTimeout(repeatTriad, 4000)

var prosTimer;
function repeatPros(){
    $(".pros-text").toggleClass("pros-active")
    prosTimer = setTimeout(repeatPros, 2500);
    $(".pros-logo").on("mouseenter", function(){
        clearTimeout(prosTimer)
    }).on("mouseleave", function(){
        prosTimer = setTimeout(repeatPros, 2500);
    })  
}
setTimeout(repeatPros, 6000)
