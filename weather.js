function getweather(){
    let city=document.getElementById('city').value;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=155ccdb0c33b4e241e7b1f8d05609adc`)
.then(function(res){
 return res.json();
})
.then(function (res){
 console.log(res);
show_weather(res);
})

 }

 function show_weather(weather){
    let parent=document.getElementById('weather');
   // parent.style.color="red";
    //parent.style.backgroundImage="https://images.pexels.com/photos/2097628/pexels-photo-2097628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      parent.innerHTML=null;
    let name=document.createElement('h1');
    name.innerText=weather.name;
    name.style.color="red";
  
    let temp=document.createElement('h3')
    temp.innerText="temperature  -"+Math.round(weather.main.temp-273)+"°"+"C";
    
    let temp_max=document.createElement('h3');
    temp_max.innerText="max_temp  -"+weather.main.temp_max;
    let temp_min=document.createElement('h3');
    temp_min.innerText="min-temp  -"+weather.main.temp_min;
    let humidity=document.createElement('h3');
    humidity.innerText="humidity  -"+weather.main.humidity;
    let pressure=document.createElement('h3');
    pressure.innerText="pressure  -"+weather.main.pressure;
    let visibility=document.createElement('h3');
    visibility.innerText="visibility  -"+weather.visibility;

  
    parent.append(name,temp,temp_max,temp_min,humidity,pressure,visibility);

 }