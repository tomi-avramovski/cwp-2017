document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();
    var city = document.getElementById("city").value;
    if(city.length == 0) {
      alert("Please insert city");
    } else {
        var api_key = "198ed08af04d13d1a3b3eb4ce74670c7";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + api_key + "&units=metric";
        fetch(url).then(function(response){
              return response.json();    
        }).then(function(data){
          console.log(data);
          document.getElementById("limain").innerHTML = data.weather[0].main;
          document.getElementById("liicon").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
          document.getElementById("litemp").innerHTML = data.main.temp;
          document.getElementById("limin").innerHTML = data.main.temp_min;
          document.getElementById("limax").innerHTML = data.main.temp_max;
          document.getElementById("liwind").innerHTML = data.wind.speed;
        });
    };
  });
