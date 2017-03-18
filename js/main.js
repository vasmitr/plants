

/*$(function() {
    $(".menu").on("click", ".icon-menu", function() {
	$(".nav-items").css({
	    "left": "0",
	    "position": "relative",
	    "transition": ".1s ease"
	});

	$(".menu").css({
	    "font-size": "0",
	    "display": "none"
	});

	$(".close").css({
	    "display": "block",
	    "font-size": "36px",
	});
    });

    $(".close").on("click", ".icon-cancel", function() {
	$(".nav-items").css({
	    "position": "absolute",
	    "left": "-300px"
	});

	$(".close").css({
	    "font-size": "0",
	    "display": "none"
	});

	$(".menu").css({
	    "display": "block",
	    "font-size": "36px",
	});
    });
    }); */


function showMenuItems() {

    var myMenu = document.getElementById('my-menu');
    var showMenu = document.getElementById('show-menu');
    var closeMenu = document.getElementById('close-menu');

    var menuStyles = myMenu.style;
    var showStyles = showMenu.style;
    var closeStyles = closeMenu.style;

    menuStyles.left = 0;
    menuStyles.position = 'relative';
    menuStyles.transition = '.5s ease';

    showStyles.fontSize = 0;
    showStyles.display = 'none';

    closeStyles.display = 'block'
    closeStyles.fontSize = '36px'
};

function closeMenuItems() {

    var myMenu = document.getElementById('my-menu');
    var showMenu = document.getElementById('show-menu');
    var closeMenu = document.getElementById('close-menu');

    var menuStyles = myMenu.style;
    var showStyles = showMenu.style;
    var closeStyles = closeMenu.style;

    menuStyles.position = 'absolute';
    menuStyles.left = '-300px';

    closeStyles.fontSize = 0;
    closeStyles.display = 'none';

    showStyles.display = 'block'
    showStyles.fontSize = '36px'
};


document.getElementById('show-menu').onclick = function() {
	this.addEventListener('click', showMenuItems());
    this.addEventListener('touchstart', showMenuItems());
};

document.getElementById('close-menu').onclick = function() {
    this.addEventListener('click', closeMenuItems());
    this.addEventListener('touchstart', closeMenuItems());
};


var owl = $('.owl-carousel');
owl.on('initialize.owl.carousel initialized.owl.carousel ' +
       'initialize.owl.carousel initialize.owl.carousel ' +
       'resize.owl.carousel resized.owl.carousel ' +
       'refresh.owl.carousel refreshed.owl.carousel ' +
       'update.owl.carousel updated.owl.carousel ' +
       'drag.owl.carousel dragged.owl.carousel ' +
       'translate.owl.carousel translated.owl.carousel ' +
       'to.owl.carousel changed.owl.carousel',
       function(e) {
           $('.' + e.type)
               .removeClass('secondary')
               .addClass('success');
           window.setTimeout(function() {
               $('.' + e.type)
                   .removeClass('success')
                   .addClass('secondary');
           }, 500);
       });
owl.owlCarousel({
    loop: true,
    nav: true,
    navText: ['<span><i class="icon-angle-circled-left"></i></span>', '<span><i class="icon-angle-circled-right"></i></span>'],
    lazyLoad: true,
    margin: 5,
    video: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
	    nav:false,
	    dots:true,
        },
        770: {
            items: 3
        },
        1000: {
            items: 4
        },
    }
});


