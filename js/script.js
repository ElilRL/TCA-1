$(document).ready(function () {
  let currentPlanet = 0;
  const planets = [
    { name: "Mercury", size: "4,879 km", distance: "57.91 million km", description: "Closest planet to the Sun." },
    { name: "Venus", size: "12,104 km", distance: "108.2 million km", description: "Second planet from the Sun." },
    { name: "Earth", size: "12,742 km", distance: "149.6 million km", description: "Our home planet." },
    { name: "Mars", size: "6,779 km", distance: "227.9 million km", description: "The Red Planet." },
    { name: "Jupiter", size: "139,820 km", distance: "778.5 million km", description: "Largest planet in our solar system." },
    { name: "Saturn", size: "116,460 km", distance: "1.434 billion km", description: "Famous for its rings." },
    { name: "Uranus", size: "50,724 km", distance: "2.871 billion km", description: "An ice giant." },
    { name: "Neptune", size: "49,244 km", distance: "4.495 billion km", description: "The farthest planet from the Sun." }
  ];

  function updatePlanetInfo(index) {
    const planet = planets[index];
    $('#planet-name').text(planet.name);
    $('#planet-size').text(`Size: ${planet.size}`);
    $('#planet-distance').text(`Distance from Sun: ${planet.distance}`);
    $('#planet-description').text(planet.description);
  }

  function rotateCarousel(direction) {
    const items = $('.cloud9-item');
    currentPlanet = (currentPlanet + direction + planets.length) % planets.length;
    items.removeClass('focused');
    items.eq(currentPlanet).addClass('focused');
    updatePlanetInfo(currentPlanet);
  }

  $('.left').on('click', () => rotateCarousel(-1));
  $('.right').on('click', () => rotateCarousel(1));

  
  updatePlanetInfo(currentPlanet);
});
