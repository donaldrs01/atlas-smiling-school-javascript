
/* Quote Carousel */

$(document).ready(function() {
    function fetchAndDisplayQuotes() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/quotes",
            method: "GET",
            beforeSend: function() {
                $("#loader-quotes").show();
            },
            success: function(response) {
                $("#loader-quotes").hide();
                const quotesCarousel = $("#quotes-carousel");

                response.forEach((quote) => {
                    console.log("Processing quote:", quote);

                    const quoteUnit = $("<div>").addClass("quoteItem").append(
                        $("<div>").addClass("row align-items-center").append(
                            $("<div>").addClass("col-12 col-lg-3 text-center").append(
                                $("<img>").addClass("d-block mx-auto").attr("src", quote.pic_url)
                            )
                        ).append(
                            $("<div>").addClass("col-12 col-lg-9").append(
                                $("<div>").addClass("quoteText").append(
                                    $("<p>").addClass("text-white").html(`&ldquo;${quote.text}&rdquo;`),
                                    $("<h4>").addClass("text-white").text(quote.name),
                                    $("<span>").addClass("text-white").text(quote.title)
                                )
                            )
                        )
                    );
                    quotesCarousel.append(quoteUnit);
                });

                quotesCarousel.removeClass("d-none");

                quotesCarousel.slick({                        
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        arrows: true,
                        prevArrow: $(".quote-arrow-left"),
                        nextArrow: $(".quote-arrow-right")
                    });
                    setTimeout(function() {
                        $(window).trigger('resize');
                    }, 300);

                    console.log("Carousel initialized..");
                },
            error: function() {
                console.error("Error with loading quotes");
                alert("Error with loading quotes");
                $("#loader-quotes").hide();
            }
        });
    }
/* Popular Tutorial Video Carousel */
     function fetchAndDisplayTutorials() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/popular-tutorials",
            method: "GET",
            beforeSend: function() {
                $("#loader-popular").show();
            },
            success: function(response) {
                console.log("Data received:", response);
                $("#loader-popular").hide();
                const tutorialCarousel = $("#popular-carousel");

                response.forEach(function(data) {
                    console.log("Adding card for video:", data.title);
                    const card = $("<div>").addClass("card mx-3").append(
                        $("<img>").addClass("card-img-top").attr("src", data.thumb_url),
                        $("<div>").addClass("card-img-overlay text-center").append(
                            $("<img>").addClass("mx-auto my-auto play-overlay").attr("src", "/images/play.png").attr("width", "55px")
                        ),
                      $("<div>").addClass("card-main").append(
                            $("<h5>").addClass("card-title").text(data.title),
                            $("<p>").addClass("card-text").text(data["sub-title"]),
                            $("<div>").addClass("author-info d-flex align-items-center").append(
                                $("<img>").addClass("rounded-circle").attr("src", data.author_pic_url).attr("width", "25px"),
                               $("<h6>").addClass("popular-author").text(data.author)
                            ),
                            $("<div>").addClass("rating-info d-flex justify-content-between").append(
                                $("<div>").addClass("rating d-flex")
                            )
                        )
                    );

                    tutorialCarousel.append(card);
                    
                });
                
                tutorialCarousel.removeClass("d-none");

               tutorialCarousel.slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    arrows: true,
                    prevArrow: $(".tutorial-arrow-left"),
                    nextArrow: $(".tutorial-arrow-right")
                });
                console.log("Carousel initialized..");
            },
                error: function() {
                    console.error("Error with loading tutorial videos");
                    alert("Error with loading tutorial videos");
                    $("#loader-popular").hide();
                }
            });
        }
/* Latest Videos Carousel */

    function fetchAndDisplayLatestVideos() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/latest-videos",
            method: "GET",
            beforeSend: function() {
                $("#loader-latest").show();
            },
            success: function(response) {
                console.log("Data received:", response);
                $("#loader-latest").hide();
                const latestVideoCarousel = $("#latest-videos-carousel");

                response.forEach(function(data) {
                    console.log("Adding card for video:", data.title);
                    const card = $("<div>").addClass("card").css({ "margin": "15px"}).append(
                        $("<img>").addClass("card-img-top").attr("src", data.thumb_url),
                        $("<div>").addClass("card-img-overlay text-center").append(
                            $("<img>").addClass("mx-auto my-auto play-overlay").attr("src", "/images/play.png").attr("width", "55px")
                        ),
                        $("<div>").addClass("card-main").append(
                            $("<h5>").addClass("card-title").text(data.title),
                            $("<p>").addClass("card-text").text(data["sub-title"]),
                            $("<div>").addClass("author-info d-flex align-items-center").append(
                                $("<img>").addClass("rounded-circle").attr("src", data.author_pic_url).attr("width", "25px"),
                               $("<h6>").addClass("popular-author").text(data.author)
                            ),
                            $("<div>").addClass("rating-info d-flex justify-content-between").append(
                                $("<div>").addClass("rating d-flex")
                            )
                        )
                    );

                    latestVideoCarousel.append(card);
                });
               latestVideoCarousel.slick({
                    infinite: true,
                    slidesToShow: 3.99,
                    slidesToScroll: 1,
                    autoplay: false,
                    arrows: true,
                    prevArrow: $(".latest-arrow-left"),
                    nextArrow: $(".latest-arrow-right")
                });
                latestVideoCarousel.removeClass("d-none");
                console.log("Carousel initialized..");
            },
            error: function() {
                console.error("Error with loading latest videos");
                alert("Error with loading latest videos");
                $("#loader-latest").hide();
            }
        });
    }
    
    /* Bootup function to determine path and appropriate function calls */

    function bootUp() {
        const path = window.location.pathname;

        if (path.includes("homepage.html")) {
            fetchAndDisplayQuotes();
            fetchAndDisplayTutorials();
            fetchAndDisplayLatestVideos();
        } else if (path.includes("pricing.html")) {
            fetchAndDisplayQuotes();
        }
    }

    bootUp();
});



