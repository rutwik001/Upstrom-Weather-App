const searchBtn = document.getElementById('searchBtn');
let cityName = document.getElementById('cityName');
let date = document.getElementById('date');
let coordinates = document.getElementById('coordinates');
let temp = document.getElementById('temp');
let humidity = document.getElementById('humidity');
let City = document.getElementById('City');
let DayDate = new Date();

 let submit = async(e)=>{
     e.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
      City.innerText =  `Please Enter City Name`;
    }else{
        try {
            City.innerText = cityVal;
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=7d0a337a96a4eac25afd4042747bc960` ;
            const response = await fetch(url);
            const users = await response.json();
            const arrusers = [users];
            console.log(arrusers);
            date.innerText = DayDate;
            coordinates.innerText = `N ${arrusers[0].coord.lat}° E ${arrusers[0].coord.lon}°` ; 
            temp.innerText = `Temperature : ${arrusers[0].main.temp - 273.16}°C`
            const icon = arrusers[0].weather[0].icon;
            const imageurl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            weather_icon.innerHTML = `<img src=${imageurl}>`
            
            
        } catch (error) {
            //console.log(error);
            City.innerText='Invalid City'
            date.innerHTML='';
            weather_icon.innerHTML ='';
            coordinates.innerHTML = `Sorry we cannot find ${cityVal}`;
            temp.innerText='Please enter a vaild City';
            humidity.innerHTML=`🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️`;
        }
           
    }
    cityVal.clear();
}

searchBtn.addEventListener('click', submit);

