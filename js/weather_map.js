$(function(){
     $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
         console.log("Weather:")
        console.log(data);

         //    card images
         let icon1 = data.weather[0].icon
         let iconUrl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";

         let icon2 = data.weather[0].icon
         let iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";

    //    card 1
        //adjustForTimezone(data.timezone);
        //console.log(convertTZ(new Date(), data.timezone))
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

             $('#date2').append(`${formatTime(data.list[7].dt)}`)

             $('#cardImage2').append('src',iconUrl2)
             $('#temp2').append(`${data.list[7].main.temp}`)
             $('#description2').append(data.list[7].weather[0].description)
             $('#humidity2').append(data.list[7].main.humidity)
             $('#wind2').append(data.list[7].wind.speed)
             $('#pressure2').append(data.list[7].main.pressure)

             // card 3

             $('#date3').append(`${formatTime(data.list[15].dt)}`)
             $('#temp3').append(`${data.list[15].main.temp}`)
             $('#description3').append(data.list[15].weather[0].description)
             $('#humidity3').append(data.list[15].main.humidity)
             $('#wind3').append(data.list[15].wind.speed)
             $('#pressure3').append(data.list[15].main.pressure)

             // card 4

             $('#date4').append(`${formatTime(data.list[23].dt)}`)
             $('#temp4').append(`${data.list[23].main.temp}`)
             $('#description4').append(data.list[23].weather[0].description)
             $('#humidity4').append(data.list[23].main.humidity)
             $('#wind4').append(data.list[23].wind.speed)
             $('#pressure4').append(data.list[23].main.pressure)

             // card 5

             $('#date5').append(`${formatTime(data.list[31].dt)}`)
             $('#temp5').append(`${data.list[31].main.temp}`)
             $('#description5').append(data.list[31].weather[0].description)
             $('#humidity5').append(data.list[31].main.humidity)
             $('#wind5').append(data.list[31].wind.speed)
             $('#pressure5').append(data.list[31].main.pressure)




         });
    });
});

