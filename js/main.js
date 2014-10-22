var url = 'http://api.wunderground.com/api/0123456789012345/forecast/geolookup/conditions/q/CA/San_Francisco.json';

getJSONP(url, 'myAwesomeFunction');

function getJSONP(url, cbName){
  var $script = document.createElement('script');
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}

function myAwesomeFunction(data){
  console.log(data);
}
