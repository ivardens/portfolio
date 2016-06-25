// ;(function () {
//   'use strict'


// // setTimeout(function() {
// //   document.querySelector('.greating_picture').classList.add('m--show')
// // }, 1000)
// })();


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initMap() {
    var bangalore = {
        lat: 49.230645,
        lng: -123.010367
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: bangalore,
        scrollwheel: false
    });

    // This event listener calls addMarker() when the map is clicked.
    // google.maps.event.addListener(map, 'click', function(event) {
    //   addMarker(event.latLng, map);
    // });

    // Add a marker at the center of the map.
    addMarker(bangalore, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    });
}

// google.maps.event.addDomListener(window, 'load', initMap);

// Skill function

// function $$(selector, context) {
//     context = context || document;
//     var elements = context.querySelectorAll(selector);
//     return Array.prototype.slice.call(elements);
// }
//
// $$('.pie').forEach(function(pie) {
//     var p = parseFloat(pie.textContent);
//     var NS = "http://www.w3.org/2000/svg";
//     var svg = document.createElementNS(NS, ".svg");
//     var circle = document.createElementNS(NS, ".circle");
//     var title = document.createElementNS(NS, "title");
//
//     circle.setAttribute("r", 16);
//     circle.setAttribute("cx", 16);
//     circle.setAttribute("cy", 16);
//     circle.setAttribute("stroke-dasharray", p + " 100");
//
//     svg.setAttribute("viewBox", "0 0 32 32");
//     title.textContent = pie.textContent;
//     pie.textContent = '';
//     svg.appendChild(title);
//     svg.appendChild(circle);
//     pie.appendChild(svg);
// });
