$(function(){
    // $.get("http://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527
    // }).done(function(data) {
    //     console.log(data);
    // });


    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat:    29.423017,
    //     lon:   -98.48527,
    //     units: "imperial"
    // }).done(function(data) {
    //     console.log(data)
    //     console.log(data.list[0].visibility)
    //     console.log(data.city.name)
    //     console.log(data.list.forEach((forecast, index) =>{
    //         if (index < 5){
    //             console.log(forecast);
    //         }
    //     }))
    // });


    $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat:    29.423017,
            lon:   -98.48527,
            units: "imperial"
        }).done(function(data) {
        console.log(data);
        console.log(data.main.temp);
        console.log(data.wind.speed);
        console.log(windCardinalDirection(data.wind.deg));
        $('body').append(`<p>The wind speed is ${data.wind.speed}`)
    })
})
