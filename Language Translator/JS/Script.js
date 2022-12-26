let selectFrom = document.querySelector(".selectFrom");
let selectTo = document.querySelector(".selectTo");
let btn = document.querySelector("button");
let fromText = document.querySelector(".from-text");
let toText = document.querySelector(".to-text");
let exchangeBtn = document.querySelector(".exchange");
let icons = document.querySelectorAll(".icons");

let selected;

const displayCountries = () => {
  for (country in countries) {
    let option = `<option>${countries[country]}</option>`;
    selectFrom.insertAdjacentHTML("afterbegin", option);
    selectTo.insertAdjacentHTML("afterbegin", option);
  }
};
displayCountries();

exchangeBtn.addEventListener("click", () => {
  [selectFrom.value, selectTo.value] = [selectTo.value, selectFrom.value];
  [fromText.value, toText.value] = [toText.value, fromText.value];
});

const showData = (data) => {
  toText.innerHTML = data.responseData.translatedText;
  btn.innerText = "Translate Text";
};

const fetchData = (input, fromVal, toVal) => {
  let url = `https://api.mymemory.translated.net/get?q=${input}&langpair=${fromVal}|${toVal} `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data));
};

const passData = () => {
    btn.innerText = "Translating Text...";
  let input = fromText.value;
  let fromVal = selectFrom.value;
  let toVal = selectTo.value;
  if (input) {
    fetchData(input, fromVal, toVal);
  }
};
btn.addEventListener("click", passData);

icons.forEach((icon) => {
  icon.addEventListener("click", ({ target }) => {
    // console.log(e.currentTarget.id)
    if (target.classList.contains("fa-copy")) {
      if (target.id == "fromcopy") {
        navigator.clipboard.writeText(fromText.value);
      } else {
        navigator.clipboard.writeText(toText.value);
      }
    } else {
      let utterence;
      if (target.id == "fromVolume") {
        utterence = new SpeechSynthesisUtterance(fromText.value);
      } else {
        utterence = new SpeechSynthesisUtterance(toText.value);
      }
    }
  });
});
