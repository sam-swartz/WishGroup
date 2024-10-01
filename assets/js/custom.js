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

        card.css('transform', `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(20px)`);
    }).on('mouseleave', function() {
        $(this).css('transform', 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)');
    });
});



// oneBond custom card

$(document).ready(function() {
    function createOneBondParticles($cardElement) {
        for (let i = 0; i < 20; i++) {
            let $oneBondParticle = $('<div>').addClass('oneBond_card_particle');
            let oneBondParticleSize = Math.random() * 5 + 2;
            $oneBondParticle.css({
                width: oneBondParticleSize + 'px',
                height: oneBondParticleSize + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDuration: (Math.random() * 2 + 1) + 's'
            });
            $cardElement.append($oneBondParticle);
        }
    }

    $('.oneBond_info_card').each(function() {
        var $oneBondCard = $(this);
        createOneBondParticles($oneBondCard);

        $oneBondCard.on('mousemove', function(oneBondEvent) {
            var oneBondRect = $oneBondCard[0].getBoundingClientRect();
            var oneBondMouseX = oneBondEvent.clientX - oneBondRect.left;
            var oneBondMouseY = oneBondEvent.clientY - oneBondRect.top;
            $oneBondCard.css({
                '--oneBond-mouse-x': oneBondMouseX + 'px',
                '--oneBond-mouse-y': oneBondMouseY + 'px'
            });
        });

        // Add 3D tilt effect
        $oneBondCard.on('mousemove', function(e) {
            var cardRect = $oneBondCard[0].getBoundingClientRect();
            var cardCenterX = cardRect.left + cardRect.width / 2;
            var cardCenterY = cardRect.top + cardRect.height / 2;
            var angleY = -(e.clientX - cardCenterX) / 25;
            var angleX = (e.clientY - cardCenterY) / 25;

            $oneBondCard.css('transform', `perspective(2000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`);
        }).on('mouseleave', function() {
            $oneBondCard.css('transform', 'none');
        });
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