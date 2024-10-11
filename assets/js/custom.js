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
        imageUrl: "./images/map-location/dubai-location.png"
    },
    {
        name: "Maldives",
        address: "M. Gulfaamuge, 1st Floor, Fareedhee Magu, Male City, 2019, Maldives",
        coordinates: [4.1755, 73.5093],
        imageUrl: "./images/map-location/maldives-location.png"
    },
    {
        name: "Ghana",
        address: "17, Swaniker street, albelemkpe, Accra, Greater Accra, Ghana",
        coordinates: [5.6037, -0.1870],
        imageUrl: "./images/map-location/ghana-location.png"
    },
    {
        name: "South Africa",
        address: "76 HAZEL ROAD RYLANDS ESTATE ATHLONE CAPE TOWN 7764",
        coordinates: [-33.9249, 18.4241],
        imageUrl: "./images/map-location/south-africa-location.png"
    },
    {
        name: "London",
        address: "9A Macdonald road, E7 OHE, London, United Kingdom.",
        coordinates: [51.5074, -0.1278],
        imageUrl: "./images/map-location/london-location.png"
    },
    {
        name: "Malaysia",
        address: "Unit 16.03 & 16.04, 16th Floor Plaza 138, 138 Jalan Ampang 50450 Kuala Lumpur",
        coordinates: [3.1390, 101.6869],
        imageUrl: "./images/map-location/malaysia-location.png"
    },
    {
        name: "Sri Lanka",
        address: "No. 17/2, Duplication Road, Bambalapitiya, Colombo 04",
        coordinates: [6.9271, 79.8612],
        imageUrl: "./images/map-location/sri-lanka-location.png"
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
        <div class="location-image" style="background-image: url('${location.imageUrl}');"></div>
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


// Bento Box - Branches list


$(document).ready(function () {
    const branches = [
      {
        name: "Prime Wish Trading LLC",
        address:
          "4004/4005, 40th floor, Citadel Tower, Al Marasi Drive Business Bay, PO BOX 417425, DUBAI, UAE",
        featured: true,
        country: "UAE",
      },
      {
        name: "Wish Hotel LLC (UAE)",
        address:
          "4004/4005, 40th floor, Citadel Tower, Al Marasi Drive Business Bay, PO BOX 417425, DUBAI, UAE",
        country: "UAE",
      },
      {
        name: "Wish Hospitality Services LLC (UAE)",
        address:
          "4004/4005, 40th floor, Citadel Tower, Al Marasi Drive Business Bay, PO BOX 417425, DUBAI, UAE",
        country: "UAE",
      },
      {
        name: "Wish Group Investment (UAE)",
        address:
          "4004/4005, 40th floor, Citadel Tower, Al Marasi Drive Business Bay, PO BOX 417425, DUBAI, UAE",
        country: "UAE",
      },
      {
        name: "Wish Bond Commercial Broker LLC (UAE)",
        address:
          "4004/4005, 40th floor, Citadel Tower, Al Marasi Drive Business Bay, PO BOX 417425, DUBAI, UAE",
        country: "UAE",
      },
      {
        name: "Wish Capital (PVT) LTD (Ghana)",
        address:
          "17, Spintex street, abheemope, Accra, Greater Accra, Ghana",
        country: "Ghana",
      },
      {
        name: "Wish Capital (PVT) LTD (SOUTH AFRICA)",
        address: "76 Henri Road, Richards Estate Athlone Cape Town 7764",
        country: "South Africa",
      },
      {
        name: "World Capital Center LTD (MALAYSIA)",
        address:
          "Unit 16.03 & 16.04, 16th Floor Plaza 138. 138 Jalan Ampang 50450 Kuala Lumpur",
        country: "Malaysia",
      },
      {
        name: "World Capital Center LTD (United Kingdom)",
        address: "83A Macdonald road, E7 0HH, London, United Kingdom",
        country: "United Kingdom",
      },
      {
        name: "World Capital Center LTD (Maldives)",
        address:
          "M. Gulheemuge, 01st Floor, Fareedhee Magu, Male City, 20ri, Maldives",
        country: "Maldives",
      },
      {
        name: "World Investment Sources Holdings LTD. (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "World Capital Center LTD. (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Brands (PVT) LTD. (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Hospitality LTD. (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Prime Wish (PVT). (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Capital (PVT) LTD. (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "The One Apparel Corporation LTD. (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Arena Blue Hotel and Resort LTD. (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Roamer (PVT) LTD. (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Farm LLC Al Ain (UAE)",
        address:
          "4004/4005, 40th floor, Citadel Tower, Al Marasi Drive Business Bay, PO BOX 417425, DUBAI, UAE",
        country: "UAE",
      },
      {
        name: "Lincmo International FEZC Ajman (UAE)",
        address:
          "4004/4005, 40th floor, Citadel Tower, Al Marasi Drive Business Bay, PO BOX 417425, DUBAI, UAE",
        country: "UAE",
      },
      {
        name: "Al Aman Capital Group (LTD) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Media Corporation (LTD)",
        address:
          "4004/4005, 40th floor, Citadel Tower, Al Marasi Drive Business Bay, PO BOX 417425, DUBAI, UAE",
        country: "UAE",
      },
      {
        name: "Aman Brands (PVT) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Town Development (LTD) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Real Estate Developer (LTD) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish HR Consultancy (PVT) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Finance (LTD) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "World Free-zone Center (LTD) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Service Apartment (LTD) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Frame (LTD) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Energy (LTD) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
      {
        name: "Wish Medical (LTD) (SRI LANKA)",
        address: "No. 1712, Duplication Road, Bambalapitiya, Colombo 04",
        country: "Sri Lanka",
      },
    ];

    const countries = [
      ...new Set(branches.map((branch) => branch.country)),
    ].sort();
    countries.forEach((country) => {
      $("#filterSelect").append($("<option>").val(country).text(country));
    });

    $("#filterSelect").on("change", function () {
      var selectedValue = $(this).val(); // Get the selected value
      var $bentoContainer = $(".bento-container"); // Target the div

      // Replace the class with the new selected value
      $bentoContainer.attr("class", "bento-container " + selectedValue);
    });

    function renderBranches(filteredBranches) {
      $("#bentoContainer").empty();

      const groupedBranches = groupByCountry(filteredBranches);

      Object.entries(groupedBranches).forEach(([country, branches]) => {
        const $countryGroup = $("<div>")
          .addClass("country-group")
          .addClass(`address-count-${branches.length}`);
        const $countryHeader = $("<div>")
          .addClass("country-header")
          .append($("<span>").text(country))
          .append(
            $("<span>").addClass("branch-count").text(branches.length)
          );
        $countryGroup.append($countryHeader);

        const $countryContent = $("<div>").addClass("country-content");

        branches.forEach((branch, index) => {
          const $item = $("<div>").addClass("bento-item");
          if (branch.featured) {
            $item.addClass("featured");
          }
          $item.append($("<h3>").text(branch.name));
          $item.append($("<p>").text(branch.address));
          $countryContent.append($item);
        });

        $countryGroup.append($countryContent);
        $("#bentoContainer").append($countryGroup);
      });
    }

    function groupByCountry(branches) {
      return branches.reduce((acc, branch) => {
        (acc[branch.country] = acc[branch.country] || []).push(branch);
        return acc;
      }, {});
    }

    function filterBranches() {
      const searchTerm = $("#searchInput").val().toLowerCase();
      const selectedCountry = $("#filterSelect").val();

      const filteredBranches = branches.filter((branch) => {
        const matchesSearch =
          branch.name.toLowerCase().includes(searchTerm) ||
          branch.address.toLowerCase().includes(searchTerm);
        const matchesCountry =
          selectedCountry === "all" || branch.country === selectedCountry;
        return matchesSearch && matchesCountry;
      });

      renderBranches(filteredBranches);
    }

    $("#searchInput, #filterSelect").on("input change", filterBranches);

    // Initial render
    renderBranches(branches);
  });