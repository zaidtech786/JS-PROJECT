let textarea = document.querySelector("#textarea")
let btn = document.querySelector(".btn")

btn.addEventListener("click" , () => {
    if(btn.innerText == "UpperCase" ){
        btn.innerText="LowerCase";
        textarea.value=textarea.value.toUpperCase();
    }
    else{
        btn.innerText="UpperCase";
        textarea.value=textarea.value.toLowerCase();
    }
});
