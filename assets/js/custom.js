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