$(function() {
    var basis = $("#carousel-basis");
        basis.owlCarousel({
        loop:true,
        nav: false,
        items: 1,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        mouseDrag: false
        });
    $(".next-basis").click(function(){
        basis.trigger('next.owl.carousel');
    })
    $(".prev-basis").click(function(){
        basis.trigger('prev.owl.carousel');
    })


    var one = $("#carousel-one");
    one.owlCarousel({
        loop:true,
        nav: false,
        margin: 30,
        responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        641:{
            items:1
        },
        770:{
            items:2
        },
        992:{
            items:3
        }
    }
    });
    var two = $("#carousel-two");
    two.owlCarousel({
        loop:true,
        items:3,
        nav: false,
        margin: 30,
        responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        641:{
            items:1
        },
        770:{
            items:2
        },
        992:{
            items:3
        }
    }
    });
    var three = $("#carousel-three");
    three.owlCarousel({
        loop:true,
        items:3,
        nav: false,
        margin: 30,
        responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        641:{
            items:1
        },
        770:{
            items:2
        },
        992:{
            items:3
        }
    }
    });
    var four = $("#carousel-four");
    four.owlCarousel({
        loop:true,
        items:3,
        nav: false,
        margin: 30,
        responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        641:{
            items:1
        },
        770:{
            items:2
        },
        992:{
            items:3
        }
    }
    });
    $(".next1").click(function(){
        one.trigger('next.owl.carousel');
    })
    $(".prev1").click(function(){
        one.trigger('prev.owl.carousel');
    })

    $(".next2").click(function(){
        two.trigger('next.owl.carousel');
    })
    $(".prev2").click(function(){
        two.trigger('prev.owl.carousel');
    })

    $(".next3").click(function(){
        three.trigger('next.owl.carousel');
    })
    $(".prev3").click(function(){
        three.trigger('prev.owl.carousel');
    })
    $(".next4").click(function(){
        four.trigger('next.owl.carousel');
    })
    $(".prev4").click(function(){
        four.trigger('prev.owl.carousel');
    })

    $('#tags_all').click(function(){
       if($('.tags__list').css("height")=="260px"){
            $('.tags__list').css("height", "auto");
        }
        else{
            $('.tags__list').css("height", "260px");
        }
        if($('#tags_all').text()=="view all tags →"){
            $('#tags_all').text("less tags ↑");
        }
        else{
            $('#tags_all').text("view all tags  →");
        }
    });

    $('#articles_all').click(function(){
       if($('.articles__list').css("height")=="260px"){
            $('.articles__list').css("height", "auto");
        }
        else{
            $('.articles__list').css("height", "260px");
        }
        if($('#articles_all').text()=="view all →"){
            $('#articles_all').text("less tags ↑");
        }
        else{
            $('#articles_all').text("view all →");
        }
    });
});