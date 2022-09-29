$(function(){
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data) {
        console.log("Forecast:")
        console.log(data);
        renderCards(data)

        /* for loop for generating cards*/

        function renderCards(forecast){
            for(let i = 0; i < forecast.list.length -1; i+=8){
                    let icon = data.list[i].weather[0].icon
                    let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
                    $('#date').append(`
                        <div class="mx-3 col-2" >
                            <div class="card ">
                                <h6>${formatTime(data.list[i].dt)}</h6>
                                <img src='${iconUrl}' class="card-img-top" alt="..." id="image">
                                <p>${data.list[i].main.temp}</p>
                                <p>${data.list[i].weather[0].description}</p>
                                <p>${data.list[i].main.humidity}</p>
                                <p>${data.list[i].wind.speed}</p>
                                <p>${data.list[i].main.pressure}</p>
                            </div>
                        </div>
                    `)
            }
        }
        // searchbar
        let $userInput = $('.searchbar');

        let $submitButton = $('.search-button');
        $submitButton.on('click', function (e) {
            e.preventDefault();
            //puts marker on searched location
            geocode($userInput.val(), MAPBOX_API_TOKEN).then(coords => {
                map.setCenter(coords);
                marker.setLngLat(coords)
                //gets data for new location
                $.get("http://api.openweathermap.org/data/2.5/forecast", {
                    APPID: OPEN_WEATHER_APPID,
                    lat: coords[1],
                    lon: coords[0],
                    units: "imperial"
                }).done(function (newData) {
                    console.log("New Data:")
                    console.log(newData);
                    renderCards(newData);
                });
            });
        });
    });


});





mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'mainMap', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 17, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});
let marker = new mapboxgl.Marker().setLngLat([-98.4916, 29.4252]).addTo(map)