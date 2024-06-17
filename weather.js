get = async() =>{
    let searchInput = cityname.value
    
    
    if(searchInput){
        const dataOne = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=2eab28cd9a6438fb3e68be50d6c02daa`)
        console.log(dataOne);
        dataOne.json().then((response)=>{
            console.log(response);

            let country = response.sys['country']
            console.log(country);

            let cityName = response['name']
            console.log(cityName);

            let curTemp = response.main['temp']
            console.log(Math.floor(curTemp-273.15));

            let minTemp = response.main['temp_min']
            console.log(Math.floor(minTemp-273.15));

            let maxTemp = response.main['temp_max']
            console.log(Math.floor(maxTemp-273.15));

            let visi = response['visibility']
            console.log((visi));

            let time = response['timezone']
            console.log(time);

            let windspeed = response.wind['speed']
            console.log(windspeed);

            let windd = response.wind['deg']
            console.log(windd);


            let weather = response.weather[0].description
            console.log(weather);

            let lat = response.coord['lat']
            console.log(lat.toFixed(2));

            let lon = response.coord['lon']
            console.log(lon.toFixed(2));

            const now = new Date();
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            
            let day = weekday[now.getDay()];

            const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

            
            let nme = month[now.getMonth()];
            
            let datee = now.getDate();
            
            const hours = now.getHours();
            if(hours>=12){
                nig = " PM"
            }
            else{
                nig ="AM"
            }
            

            const minutes = now.getMinutes();
            console.log(` ${day}, ${hours}:${minutes}`);

            datewr.innerHTML = `${datee} ${nme}, ${day}, ${hours}:${minutes} ${nig} `
            

            loc.innerHTML = `${cityName} | ${country}`
            desc.innerHTML = `${weather}`
            tempn.innerHTML = `${Math.floor(curTemp-273.15)}°`
            maxt.innerHTML = `${Math.floor(maxTemp-273.15)}°`
            mint.innerHTML = `${Math.floor(minTemp-273.15)}°`
            wspeed.innerHTML = `${windspeed}`
            wdd.innerHTML = `${windd}°`
            see.innerHTML = `${visi}`
            sama.innerHTML = `${time}`
            lt.innerHTML = `${lat.toFixed(2)}`
            lg.innerHTML = `${lon.toFixed(2)}`

            
            


                      

        })
        

        

    }
    else{
        alert("Please enter the city name")
    }

}