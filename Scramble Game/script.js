
let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
];




let Word = document.querySelector(".Word")
let input = document.querySelector(".input");
let hint = document.querySelector(".hint");
let refreshBtn = document.querySelector(".refreshBtn")
let CheckWord = document.querySelector(".CheckWord");
let time = document.querySelector(".timeVal");
let ans;
// let timeLim = 30
let timer;

const timeFunc = (maxTime) => {
    clearInterval(timer)
    timer = setInterval( () => {
      if(maxTime>0){
        maxTime--
        return time.innerHTML = maxTime;
      }
      clearInterval(timer);
      alert(`Time limit exceeded , Correct Answer is '${ans.toUpperCase()}' `)
      generateWord();
    },1000)

}

const generateWord = () => {
    timeFunc(30)
    let wordData = words[Math.floor(Math.random() * words.length)];
    let wordArray = wordData.word.split("") 
    // console.log(wordArray)
    for (let i = wordArray.length-1; i >0; i--) {
        var j= Math.floor(Math.random() * (i+1));
        let temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp
    }
    ans=wordData.word;
    Word.innerHTML = wordArray.join("").toLocaleUpperCase()
    hint.innerHTML = wordData.hint;
    console.log(wordArray,wordData.word)
}
generateWord();

const checkedAns = () => {
    if(!input.value){
       return alert("Please Enter Something");
    }
    else if(input.value !== ans) {
        return  alert(`Oops , incorrect Answer `)
    }
    else{
         alert(`Congrats Your Guess '${ans.toUpperCase()}' is correct `)
        input.value="";
        generateWord();
    }
}

const refreshWord = () => {
    generateWord()
}

CheckWord.addEventListener("click" ,checkedAns )
refreshBtn.addEventListener("click" ,refreshWord )