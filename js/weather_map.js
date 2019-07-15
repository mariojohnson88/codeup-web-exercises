(function () {
"use strict";

var iconObjects = [
    {forecastSummary: "Clear", forecast: "Clear", condition: "clear-day", url: "climacons-master/SVG/Sun.svg"},
    {forecastSummary: "Clear", forecast: "Clear", condition: "clear-night", url: "climacons-master/SVG/Moon.svg"},
    {forecastSummary: "Rainy", forecast: "Rain", condition: "rain", url: "climacons-master/SVG/Cloud-Rain.svg"},
    {forecastSummary: "Snowing", forecast: "Snow", condition: "snow", url: "climacons-master/SVG/Snowflake.svg"},
    {forecastSummary: "Sleeting", forecast: "Sleet", condition: "sleet", url: "climacons-master/SVG/Cloud-Snow.svg"},
    {forecastSummary: "Windy", forecast: "Wind", condition: "wind", url: "climacons-master/SVG/Wind.svg"},
    {forecastSummary: "Foggy", forecast: "Fog", condition: "fog", url: "climacons-master/SVG/Cloud-Fog.svg"},
    {forecastSummary: "Cloudy", forecast: "Clouds", condition: "cloudy", url: "climacons-master/SVG/Cloud.svg"},
    {forecastSummary: "Partly Cloudy", forecast: "Clouds", condition: "partly-cloudy-day", url: "climacons-master/SVG/Cloud-Sun.svg"},
    {forecastSummary: "Partly Cloudy", forecast: "Clouds", condition: "partly-cloudy-night", url: "climacons-master/SVG/Cloud-Moon.svg"}
];

mapboxgl.accessToken = mapboxAPI;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-97.7431,30.2672]
    // above is Austin, TX coordinates
});

    var lat = $('#latitude').val();
    var lng = $('#longitude').val();
    console.log(lat);
    console.log(lng);
    //write event listener for sumbit button
    $('.btn1').click(function(e) {
        //pulls current input in lng and lat boxes
        lat = $('#latitude').val();
        lng = $('#longitude').val();
        console.log("test");
        console.log(lat);
        console.log(lng);

        //resets our cards, to have nothing when we submit new lng and lat
        $('#weather').empty();

        //this pulls weather conditions for the submitted lng and lat from DarkSky
        $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyAPI + "/" + lat + "," + lng).done(function(data) {
            console.log(data);
            addCurrentConditions(data.daily.data);
        });

        //placing lng and lat into an object to use in reverseGeocoder
        var coordinates = {lng:lng ,lat:lat};


        //reverseGeocoder comes from MapBox utils, takes in coordinates and makes a request to mapbox for the address
        reverseGeocode(coordinates,mapboxAPI).then(function(results){
            //returns address at lng and lat
            $('#selectedCity').html(results);
            console.log(results);
        });
    });



    function placeMarker(info, token, map) {
        geocode(info.address, token).then(function(coordinates) {
        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([-97.7431, 30.2672])
            .addTo(map)
        });
    }


$.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyAPI + "/29.4241,-98.4936").done(function(data) {
    console.log(data);
    addCurrentConditions(data.daily.data);
});

function addCurrentConditions(data) {
    var url;
    var forecast;
    var forecastSummary;
    var html = "";
    console.log(data);
    data.forEach(function (condition, i) {
        iconObjects.forEach(function (value) {
            if (condition.icon === value.condition) {
                url = value.url;
                forecast = value.forecast;
                forecastSummary = value.forecastSummary;
            }
        });
        console.log(condition);
        if (i <= 2) {
            html += "<div class='col-4'>";
            html += "<p>" + Math.round(condition.apparentTemperatureHigh) + "°/" + Math.round(condition.apparentTemperatureLow) + "°</p>";
            html += "<img src='" + url + "'>";
            html += "<p>" + "<strong>" + forecast + ": </strong>" + forecastSummary + "</p>";
            html += "<p>" + "<strong>Humidity: </strong>" + Math.round(condition.humidity * 100) + "</p>";
            html += "<p>" + "<strong>Wind: </strong>" + condition.windSpeed + "</p>";
            html += "<p>" + "<strong>Pressure: </strong>" + condition.pressure + "</p>";
            html += "</div>";
        }
    });
    $('#weather').append(html)
}
})();
