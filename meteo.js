function buttonClickGET() {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

  $.get(url, callBackGetSuccess).done(function() {
    //alert( "second success" );
  })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      //alert( "finished" );
    });
}
var callBackGetSuccess = function(data) {
  var element = document.getElementById("weather");
  element.innerHTML = "La température est de : " + data.main.temp;
}
