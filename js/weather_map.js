$(function(){
     $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
         console.log("Weather:")
        console.log(data);

    //    card 1

         let icon1 = data.weather[0].icon
         let iconUrl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";

        $('#date1').append(`${formatTime(data.dt)}`)
         $('#cardImage1').attr('src',iconUrl1)
        $('#temp1').append(data.main.temp)
        $('#description1').append(data.weather[0].description)
        $('#humidity1').append(data.main.humidity)
        $('#wind1').append(data.wind.speed)
        $('#pressure1').append(data.main.pressure)

         $.get("http://api.openweathermap.org/data/2.5/forecast", {
             APPID: OPEN_WEATHER_APPID,
             lat:    29.423017,
             lon:   -98.48527,
             units: "imperial"
         }).done(function(data) {
             console.log("Forecast:")
             console.log(data);

            // card 2
             let icon2 = data.list[7].weather[0].icon
             let iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
             $('#date2').append(`${formatTime(data.list[7].dt)}`)
             $('#cardImage2').attr('src',iconUrl2)
             $('#temp2').append(`${data.list[7].main.temp}`)
             $('#description2').append(data.list[7].weather[0].description)
             $('#humidity2').append(data.list[7].main.humidity)
             $('#wind2').append(data.list[7].wind.speed)
             $('#pressure2').append(data.list[7].main.pressure)

             // card 3
             let icon3 = data.list[15].weather[0].icon
             let iconUrl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
             $('#date3').append(`${formatTime(data.list[15].dt)}`)
             $('#cardImage3').attr('src',iconUrl3)
             $('#temp3').append(`${data.list[15].main.temp}`)
             $('#description3').append(data.list[15].weather[0].description)
             $('#humidity3').append(data.list[15].main.humidity)
             $('#wind3').append(data.list[15].wind.speed)
             $('#pressure3').append(data.list[15].main.pressure)

             // card 4
             let icon4 = data.list[23].weather[0].icon
             let iconUrl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
             $('#date4').append(`${formatTime(data.list[23].dt)}`)
             $('#cardImage4').attr('src',iconUrl4)
             $('#temp4').append(`${data.list[23].main.temp}`)
             $('#description4').append(data.list[23].weather[0].description)
             $('#humidity4').append(data.list[23].main.humidity)
             $('#wind4').append(data.list[23].wind.speed)
             $('#pressure4').append(data.list[23].main.pressure)

             // card 5
             let icon5 = data.list[31].weather[0].icon
             let iconUrl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";
             $('#date5').append(`${formatTime(data.list[31].dt)}`)
             $('#cardImage5').attr('src',iconUrl5)
             $('#temp5').append(`${data.list[31].main.temp}`)
             $('#description5').append(data.list[31].weather[0].description)
             $('#humidity5').append(data.list[31].main.humidity)
             $('#wind5').append(data.list[31].wind.speed)
             $('#pressure5').append(data.list[31].main.pressure)

            // searchbar location
             let userInput = document.querySelector('.searchbar')

             function addLocation(e){
                 e.preventDefault()
                 //511 W Hollywood Ave, San Antonio, TX 78212
                 getCoords("'" + userInput + "'", MAPBOX_API_TOKEN)

                 coords.forEach(function (){
                 })
            }



             let submitButton = document.querySelector('.search-button');
             submitButton.addEventListener('click', addLocation)



         });
    });
});

mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'mainMap', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 10, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});