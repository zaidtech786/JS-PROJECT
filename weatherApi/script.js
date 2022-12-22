

let input=document.querySelector('#input');
let citys=document.querySelector('.citys')
let temp=document.querySelector('.temp');
let img=document.querySelector('.img');
let description=document.querySelector('.description');
let humidity=document.querySelector('.humidity');
let wind=document.querySelector('.wind');
let card=document.querySelector('.card')

let API_URL;
// let search="Mumbai";
let API_KEY="a26ca8afc178375c7f9a424f2621ff8c";

input.addEventListener('keyup',(e)=>{
  let searchData=input.value;
   if (e.key=="Enter" && searchData!="") {
    getAPI(searchData);
   }
})

const getAPI = async(searchData) => {
     API_URL=`http://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&appid=${API_KEY}`;
  let res=await fetch(API_URL);
  let data=await res.json();
  console.log(data);
  console.log(data.main.temp);
  console.log(data.weather[0].main);
weatherReports(data);
}

getAPI(API_URL);

const weatherReports = (weatherData) => {
  citys.innerText=`${weatherData.name} , ${weatherData.sys.country}`;
  temp.innerText=`${Math.round(weatherData.main.temp) }°C`;
  img.src=`${weatherData.weather[0].icon}`;
  description.innerText=`Cloud:${weatherData.weather[0].main}`;
  humidity.innerText=`humidity:${weatherData.main.humidity}`;
  wind.innerText=`Wind speed:${weatherData.wind.speed}`;

  if (description.textContent=="Haze") {
    card.style.backgroundImage="url('haze.jpg')";
  }
  else if (description.textContent=="Clear") {
    card.style.backgroundImage="url('clear_sky.jpg')";
  }
  else  {
    card.style.backgroundImage="url('mist.jpg')";
  }
}




















