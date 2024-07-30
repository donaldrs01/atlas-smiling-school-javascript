$(document).ready(function() {
    
    function fetchAndDisplayTutorials() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/popular-tutorials",
            method: "GET",
            beforeSend: function() {
                $("#loader-popular").show();
            },
            success: function(response) {
                $("#loader-popular").hide();
                const tutorialCarousel = $("#popular-carousel");

                response.forEach(function(data) {
                    const card = $("<div>").addClass("card").append(
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
                    prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
                    nextArrow: "<button type='button' class='slick-next'>Next</button>",
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
    
        fetchAndDisplayTutorials();
});
    /* function fetchAndDisplayQuotes() {
        console.log("Fetching quotes...");
        $("#loader-quotes").show();
        $("#quotes-carousel").hide();

        $.ajax({
            url: "https://smileschool-api.hbtn.info/quotes",
            method: "GET",
            success: function(quotes) {
                console.log("Quotes received", quotes)
                // Hide loader on success
                $("#loader-quotes").hide();
                const quotesContainer = $("#quotes-carousel");
                quotesContainer.empty();
            
                quotes.forEach((quote, index) => {
                    console.log("Processing quote:", quote);
                    const quoteUnit = $("<div>")
                        .addClass("carousel-item")
                        .toggleClass("active", index===0)
                        .append(
                            $("<div>").addClass("row align-items-center")
                            .append(
                                $("<div>").addClass("col-12 col-lg-3 text-center")
                                .append(
                                    $("<img>").addClass("d-block mx-auto").attr("src", quote.pic_url)
                                )
                            )
                            .append(
                                $("<div>").addClass("col-12 col-lg-9")
                                .append(
                                    $("<div>").addClass("quote-text")
                                    .append($("<p>").addClass("text-white").html(`&ldquo; ${quote.text} &rdquo;`))
                                    .append($("<h4>").addClass("text-white").text(quote.name))
                                    .append($("<span>").addClass("text-white").text(quote.title))
                                )
                            )
                        );

                    quotesContainer.append(quoteUnit);
            });

            setTimeout(function() {
                quotesContainer.show().slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    arrows: true,
                    prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
                    nextArrow: "<button type='button' class='slick-next'>Next</button>",
                });
                console.log("Carousel initialized..");
            },100);
            },
            error: function() {
                console.error("Error with loading quotes");
                alert("Error with loading quotes");
                $("#loader-quotes").hide();
            }
        });
    }

    fetchAndDisplayQuotes();

});

*/ 

