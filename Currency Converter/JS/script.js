let btn = document.querySelector("button");
let selectFrom = document.querySelector("#selectFrom");
let selectTo = document.querySelector("#selectTo");
let input = document.querySelector(".input");
let result = document.querySelector(".result");
let selected;

let DisplayCountries = () => {
  let option;
  for (country in country_list) {
    option = `<option>${country}</option>`;
    selectFrom.insertAdjacentHTML("afterbegin", option);
    selectTo.insertAdjacentHTML("beforeend", option);
  }
};

DisplayCountries();

const RatesData = (data, input, fromVal, toVal) => {
  let exchangeRate = data.conversion_rates[toVal];
  let totalExchangeRate = (input * exchangeRate).toFixed(2);
  result.innerHTML = `${input} ${fromVal} =  ${totalExchangeRate} ${toVal}`;
  btn.innerText = "Get Exchange Rate"
};

const fetchApi = (input, fromVal, toVal) => {
    let apiKey = "f82b71f47a4a1b29261846b5";
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromVal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => RatesData(data, input, fromVal, toVal));
};

const Func = () => {
    let userinput = input.value;
    if (userinput) {
      btn.innerText = "Getting Rates";
    return fetchApi(userinput, selectFrom.value, selectTo.value);
  }
  alert("Please Fill the input Field")
};

btn.addEventListener("click", Func);
