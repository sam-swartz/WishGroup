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
    $('.oneBond_card_info').each(function() {
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
    $('.oneBond_card_info').on('mousemove', function(e) {
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


// custom map
const locations = [
    {
        name: "Dubai",
        address: "4004/4005, 40th floor, Citadel Tower, Al Marasi Drive Business Bay, P.O.BOX 417425, DUBAI, UAE",
        coordinates: [25.2048, 55.2708],
        imageUrl: "https://example.com/dubai-image.jpg"
    },
    {
        name: "Maldives",
        address: "M. Gulfaamuge, 1st Floor, Fareedhee Magu, Male City, 2019, Maldives",
        coordinates: [4.1755, 73.5093],
        imageUrl: "https://example.com/maldives-image.jpg"
    },
    {
        name: "Ghana",
        address: "17, Swaniker street, albelemkpe, Accra, Greater Accra, Ghana",
        coordinates: [5.6037, -0.1870],
        imageUrl: "https://example.com/ghana-image.jpg"
    },
    {
        name: "South Africa",
        address: "76 HAZEL ROAD RYLANDS ESTATE ATHLONE CAPE TOWN 7764",
        coordinates: [-33.9249, 18.4241],
        imageUrl: "https://example.com/south-africa-image.jpg"
    },
    {
        name: "London",
        address: "9A Macdonald road, E7 OHE, London, United Kingdom.",
        coordinates: [51.5074, -0.1278],
        imageUrl: "https://example.com/london-image.jpg"
    },
    {
        name: "Malaysia",
        address: "Unit 16.03 & 16.04, 16th Floor Plaza 138, 138 Jalan Ampang 50450 Kuala Lumpur",
        coordinates: [3.1390, 101.6869],
        imageUrl: "https://example.com/malaysia-image.jpg"
    },
    {
        name: "Sri Lanka",
        address: "No. 17/2, Duplication Road, Bambalapitiya, Colombo 04",
        coordinates: [6.9271, 79.8612],
        imageUrl: "https://example.com/sri-lanka-image.jpg"
    }
];

const map = L.map('map', {
    center: [20, 0],
    zoom: 2,
    minZoom: 2,
    maxZoom: 9,
    zoomControl: true,
    scrollWheelZoom: true,
    dragging: true,
    doubleClickZoom: true,
    boxZoom: false
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);

const customIcon = L.divIcon({
    className: 'custom-icon',
    html: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C7.58 0 4 3.58 4 8c0 5.5 8 16 8 16s8-10.5 8-16c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#f80d11c5"/></svg>',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});

locations.forEach(location => {
    const marker = L.marker(location.coordinates, {icon: customIcon}).addTo(map);
    
    const popupContent = `
        <img src="${location.imageUrl}" alt="${location.name}" class="location-image">
        <div class="location-name">${location.name}</div>
        <div class="location-address">${location.address}</div>
    `;
    
    marker.bindPopup(popupContent, {
        closeButton: true,
        maxWidth: 300
    });

    marker.on('mouseover', function (e) {
        this.openPopup();
    });
});

// Make map responsive
function handleResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
        map.setZoom(1);
    } else if (windowWidth <= 1024) {
        map.setZoom(2);
    } else {
        map.setZoom(3);
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Call once to set initial state

$(document).ready(function() {
    // Smooth 3D tilt effect with dynamic shadow
    $('#map').on('mousemove', function(e) {
        var map = $(this);
        var mapRect = map[0].getBoundingClientRect();
        var mapCenterX = mapRect.left + mapRect.width / 2;
        var mapCenterY = mapRect.top + mapRect.height / 2;

        // Adjusting max rotation to avoid extreme flips
        var maxRotation = 15;
        var angleY = Math.max(Math.min(-(e.clientX - mapCenterX) / 50, maxRotation), -maxRotation);
        var angleX = Math.max(Math.min((e.clientY - mapCenterY) / 50, maxRotation), -maxRotation);

        // Calculate smooth shadow offset
        var shadowX = (e.clientX - mapCenterX) / 40;
        var shadowY = (e.clientY - mapCenterY) / 40;
        var shadowBlur = 40 + Math.abs(shadowX) + Math.abs(shadowY);

        map.css({
            'transform': `perspective(3000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(15px)`,
            'box-shadow': `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.25)`
        });
    }).on('mouseleave', function() {
        $(this).css({
            'transform': 'perspective(3000px) rotateX(0) rotateY(0) translateZ(0)',
            'box-shadow': '0px 0px 20px rgba(0, 0, 0, 0.2)',
            'transition': 'transform 0.5s ease, box-shadow 0.5s ease'
        });
    });
});


