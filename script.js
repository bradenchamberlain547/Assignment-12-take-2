$(document).ready(function() {
    $(".more").click(function() {
        let card = $(".profile-card");
        let about = $(".about");
        let picture = $(".picture");
        let button = $(this);

        if (card.height() === 400) {
            let newHeight = card.get(0).scrollHeight;
            card.animate({height: newHeight});
            about.css("height", "auto");
            picture.css("filter", "blur(5px)");
            button.text("Show Less");
        } else {
            card.animate({height: "400px"});
            about.css({height: "40"});
            picture.css("filter", "none");
            button.text("Show More");
        }
    })
})