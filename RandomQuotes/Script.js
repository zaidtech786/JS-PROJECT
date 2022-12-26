let quotes = document.querySelector("#quotes");
let author = document.querySelector("#author");
let btn = document.querySelector(".btn");

  const getRandomQuotes = () => {
    let url = "https://type.fit/api/quotes";
    fetch(url).then(res => res.json()).then(data => QuotesData(data))
  }
  getRandomQuotes()


  const QuotesData = (data) => {
   let randomQuotes = data[Math.floor(Math.random()*data.length)];
   quotes.innerText =`${randomQuotes.text}`;
         author.innerText = `-${randomQuotes.author}`;
   
  }
 
 
btn.addEventListener("click", getRandomQuotes);