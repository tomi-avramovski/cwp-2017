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
// var city 
// kreirame nova varijabla city
// = dodeluivame vrednost (koja?)
// se sto e desno od ednakvoto se dodeluva na city
// sakame da zeeme tekstot vo input poleto
// prvo treba da go trargertirame elementot
// document (elementot e vo dokumentot ocigledno) get element by id (spored id locirame) e sea ako go ostavime vaka ke se zeme celiot html sto e so toj ID t.e. vo city ke ima <input type> celoto toa, a nasn i treba samo tekstot vo nego, a tekstot e vo subelement value, so tocka pristapuvame do toj subelement i zatoa dodavame .value

// e sea otkako city go ima toa so e pisano vo input fieldot - treba da vbidime dali e prazno posto moze prazno bilo
// za da vidime dali e prazno proveruvame dali dolzinata na tekstot e 0
// ako e nula togas ustv nema tekst
// ako e se osven nula (primer bukvata A or w./e) da rece eror
// greska** ako e se ossven nula da produzi u toa so ni treba
// ako e 0 da javi eror