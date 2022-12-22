let btn = document.querySelector("button")
let selectFrom = document.querySelector("#selectFrom")
let selectTo = document.querySelector("#selectTo")
let input = document.querySelector(".input");
let result = document.querySelector(".result")
let selected;

let DisplayCountries = () => {
   
    let option;
    for(country in country_list){
        option = `<option>${country}</option>`
        if (country=="USD") {
            selectFrom.innerHTML="USD";
        }
        if (country=="INR") {
            selectTo.innerHTML="INR";
        }
        selectFrom.insertAdjacentHTML("afterbegin",option)
        selectTo.insertAdjacentHTML("beforeend",option);
    }
    
   
   
   
    
}

DisplayCountries();

const RatesData = (data,input,fromVal,toVal) => {
   
    let exchangeRate =data.conversion_rates[toVal];
    console.log(exchangeRate)
    let totalExchangeRate = (input *exchangeRate ).toFixed(2);
    console.log(totalExchangeRate)
    result.innerHTML = `${input} ${fromVal} =  ${totalExchangeRate} ${toVal}`
}

const fetchApi = (input,fromVal,toVal) => {
    // console.log(fromVal,toVal)
    let apiKey = "f82b71f47a4a1b29261846b5"
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromVal}`;
    fetch(url).then(res => res.json()).then(data=>RatesData(data,input,fromVal,toVal))
}
// 
const Func = () => {
    let userinput = input.value;
    if(userinput){
        fetchApi(userinput,selectFrom.value,selectTo.value)
    }
    else{
        input.value = "1";
        fetchApi(userinput,selectFrom.value,selectTo.value)
    }
}

btn.addEventListener("click" , Func)
