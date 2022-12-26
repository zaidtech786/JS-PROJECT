let input = document.querySelector(".input");
let suggestion = document.querySelector(".suggestion")
let contents = document.querySelector(".contents");
let userText = document.querySelector(".userText")
let adj = document.querySelector(".adj")
let volumeIcon = document.querySelector(".volumeIcon")
let meaningg = document.querySelector(".meaningg")
let example = document.querySelector(".example")
let synonyms = document.querySelector(".synonyms");
let pos = document.querySelector(".pos");
let audioSound;


input.addEventListener("keyup",e=>{
   if(input.value){
    suggestion.innerHTML= `Searching the meaning of ${input.value}`
    fetchApi(input.value)
   }
   else{
    contents.style.display="none";
    suggestion.innerHTML="Type a word and press enter to get meaning , examples , pronounciation, and synonyms of that typed word"
   }
})

const fetchApi = (word) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(res =>res.json()).then(data => ApiData(data));
}

const AudioFunc = () => {
    audioSound.forEach( item => {
        console.log(item)
        if(item.audio == ""){
            alert("Audio is not available for this Word")
        }
        else{
            let audioData = new Audio(item.audio );
            audioData.play();
        }
    })
}
volumeIcon.addEventListener("click" ,AudioFunc)

const ApiData = (data) => {
    let meaning = data[0].meanings[0].definitions[0]
    let synonymsText =  data[0].meanings[0].synonyms
    let syno;

    if(data.title){
         suggestion.innerHTML = data.title;
        contents.style.display="none"
    }
    else{
        suggestion.innerHTML = "";
        contents.style.display="block";
        userText.innerHTML = input.value
        meaningg.innerHTML = meaning.definition;
        synonyms.innerHTML="";
        adj.innerHTML = data[0].phonetic;
        pos.innerHTML = data[0].meanings[0].partOfSpeech;
        audioSound = data[0].phonetics;
       
        if(synonymsText==""){
            synonyms.innerHTML="Synonyms not Available";
            return false;
        }
         for (let i = 0; i < 5; i++) {
            syno = `<span>${synonymsText[i]}</span>   `;
            synonyms.insertAdjacentHTML("afterbegin",syno)
        }
       
    }

}


