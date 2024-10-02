$(document).ready(function() {
    $('.pricing-card').each(function() {
        var card = $(this);
        var particleZones = card.find('.particle-zone');
        particleZones.each(function() {
            var zone = $(this);
            for (var i = 0; i < 10; i++) {
                var size = Math.random() * 3 + 1;
                var particle = $('<div class="particle"></div>').css({
                    width: size + 'px',
                    height: size + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    animation: `float ${Math.random() * 3 + 2}s infinite`
                });
                zone.append(particle);
            }
        });
    });

    $('.pricing-card').hover(
        function() {
            $(this).find('button').text('Choose Now');
        },
        function() {
            $(this).find('button').text('Select Plan');
        }
    );

    $('.pricing-card button').click(function() {
        alert('Thank you for selecting this plan!');
    });

    // 3D tilt effect
    $('.pricing-card').on('mousemove', function(e) {
        var card = $(this);
        var cardRect = card[0].getBoundingClientRect();
        var cardCenterX = cardRect.left + cardRect.width / 2;
        var cardCenterY = cardRect.top + cardRect.height / 2;
        var angleY = -(e.clientX - cardCenterX) / 25;
        var angleX = (e.clientY - cardCenterY) / 25;

        card.css('transform', `perspective(2000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(20px)`);
    }).on('mouseleave', function() {
        $(this).css('transform', 'perspective(2000px) rotateX(0) rotateY(0) translateZ(0)');
    });
});



// oneBond custom card

$(document).ready(function() {
    $('.oneBond_info_card').each(function() {
        var card = $(this);
        var particleZones = card.find('.particle-zone');
        particleZones.each(function() {
            var zone = $(this);
            for (var i = 0; i < 10; i++) {
                var size = Math.random() * 3 + 1;
                var particle = $('<div class="particle"></div>').css({
                    width: size + 'px',
                    height: size + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    animation: `float ${Math.random() * 3 + 2}s infinite`
                });
                zone.append(particle);
            }
        });
    });

    // 3D tilt effect
    $('.oneBond_info_card').on('mousemove', function(e) {
        var card = $(this);
        var cardRect = card[0].getBoundingClientRect();
        var cardCenterX = cardRect.left + cardRect.width / 2;
        var cardCenterY = cardRect.top + cardRect.height / 2;
        var angleY = -(e.clientX - cardCenterX) / 25;
        var angleX = (e.clientY - cardCenterY) / 25;

        card.css('transform', `perspective(3000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(20px)`);
    }).on('mouseleave', function() {
        $(this).css('transform', 'perspective(3000px) rotateX(0) rotateY(0) translateZ(0)');
    });
});


// custom video player for local

NioApp.Plugins.videoBG = function() {
    var $videobg = $(".bg-video");

    if ($videobg.exists()) {
        $videobg.each(function() {
            var $this = $(this),
                $that = $this.parent(),
                overlay = $this.data('overlay'),
                opacity = $this.data('opacity'),
                overlay_type = (typeof overlay !== 'undefined' && overlay) ? overlay : false,
                opacity_value = (typeof opacity !== 'undefined' && opacity) ? opacity : false;

            if (!$that.hasClass('has-bg-video')) {
                $that.addClass('has-bg-video');
            }

            if (overlay_type) {
                if (!$this.hasClass('overlay-' + overlay_type)) {
                    $this.addClass('overlay');
                    $this.addClass('overlay-' + overlay_type);
                }
            } else {
                if (!$this.hasClass('overlay-fall')) {
                    $this.addClass('overlay-fall');
                }
            }
            if (opacity_value) {
                $this.addClass('overlay-opacity-' + opacity_value);
            }

            // Check if it's a local video
            if ($this.hasClass('bg-video-local')) {
                // Local video is already included in the HTML
                var videoElement = $this.find('video.bg-video-content');
                if (videoElement.length) {
                    videoElement.get(0).play(); // Ensure the video starts playing
                }
            }
        });
    }
};

NioApp.components.docReady.push(NioApp.Plugins.videoBG);

// Card flip logic only for screens less than 768px
function isMobile() {
    return window.innerWidth <= 991;
}

$('.front-click').on('click', function() {
    if (isMobile()) {
        $('.swap-card').toggleClass('active');

        // Optional: Delay or sequence animation for better visual experience
        setTimeout(() => {
            $('.back-card').css('z-index', $('.back-card').hasClass('active') ? '2' : '1');
            $('.front-card').css('z-index', $('.front-card').hasClass('active') ? '1' : '2');
        }, 100);
    }
});

$('.back-click').on('click', function() {
    if (isMobile()) {
        $('.swap-card').removeClass('active');

        setTimeout(() => {
            $('.back-card').css('z-index', '1');
            $('.front-card').css('z-index', '2');
        }, 100);
    }
});

// Optionally, you can add an event listener to check when the window is resized
window.addEventListener('resize', function() {
    if (isMobile()) {
        // Re-apply any necessary styles or reset the card state
        $('.swap-card').removeClass('active');
        $('.back-card').css('z-index', '1');
        $('.front-card').css('z-index', '2');
    }
});