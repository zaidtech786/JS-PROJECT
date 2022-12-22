let quotes = document.querySelector("#quotes");
let author = document.querySelector("#author");
let btn = document.querySelector(".btn");

let data = "";
// let headers = {
//   header: {
//     Accept: "application/json",
//   },
// };

// const randomQuotesGenerate = () => {
//       let random = Math.floor(Math.random() * 1643);
//       quotes.innerText =`${data[random].text}`;
//       author.innerText = `-${data[random].author}`;
//     };

  // const getRandomQuotes = async () => {
  //   let res = await fetch( 'https://type.fit/api/quotes');
  //    data = await res.json();
  //   randomQuotesGenerate();
  // };
  // getRandomQuotes();
  // console.log(getRandomQuotes())

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