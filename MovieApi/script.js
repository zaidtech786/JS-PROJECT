// Variable initialization
let form=document.querySelector('#form');
let card=document.querySelector('.card');
let cardContainer=document.querySelector('.card-container');
let input=document.querySelector('#input');
let searchBtn=document.querySelector('.btn');

const APIKEY = "6819694530bec1144820d8987987f28b";
let SEARCH_URL="https://api.themoviedb.org/3/search/movie?&api_key=6819694530bec1144820d8987987f28b&query=";
const IMG_URL='https://image.tmdb.org/t/p/w500';
API_URL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`;


const getAPI = async (url) => {
    let res = await fetch(url);
    let data=await res.json();
    console.log(data);
    
    showMovies(data.results);
    
}
getAPI(API_URL);


// function showMovies(movies){
//     cardContainer.innerHTML="";
//     movies.forEach(movie => {
//         const {poster_path,title,vote_average,overview}=movie;
//         // const movieEl=document.createElement('div');
//         // movieEl.classList.add('card');
//         let htmlData=`
//         <div class="card">
//         <img src="${IMG_URL+poster_path}" alt="${title}">
//         <div class="content">
//         <h3 class="title">${title}</h3><span class="rating">${vote_average}</span>
//         <p class="overview">${overview}</p>
//         </div>
//         </div>
//         `
//         cardContainer.insertAdjacentHTML('afterbegin',htmlData);
//         document.body.appendChild(movieEl);
//     });
// }

const showMovies = (movies) => {
let movieData = movies.map( item => {
 console.log(item);
 const {poster_path,title,vote_average,overview}=item;
 return (
    `
    <div class="card">
         <img src="${IMG_URL+poster_path}" alt="${title}">
         <div class="content">
         <h3 class="title">${title}</h3><span class="rating">${vote_average}</span>
         <p class="overview">${overview}</p>
         </div>
    </div>
    `
 );
 
});
cardContainer.innerHTML = movieData;
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let input=search.value;
    console.log(input);
    if (input) {
       getAPI(SEARCH_URL+input);  
       search.value="";
}

});