let hour = document.getElementById('hour')
function getWeather(){
  let city = document.getElementById('city').value || 'Tashkent'
  document.getElementById('city').value = ''
  axios
    .get(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, {
      headers: {
        'X-RapidAPI-Key': 'ae0f0b0434msh782b6d60a061bd3p1f6253jsn0f394cbfc9a7'
      }
    })
    .then(res => {
      console.log(res.data)
      hour.innerHTML = '';
      document.getElementById('div').innerHTML = `<h1>${city}</h1>
      <h1>${res.data.forecast.forecastday[0].day.mintemp_c}℃</h1>
      `
    })
    .catch((error) => {
      console.log('error : ' + error);
    })
}
getWeather();

 