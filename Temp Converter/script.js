let input = document.querySelector("#input")
let btn = document.querySelector(".btn");
let res = document.querySelector(".res");
let temp = document.querySelector("#temp");

btn.addEventListener("click" , () => {
    let result;
    let number = input.value;
    if(number=="") {
        res.innerText = "Please Enter the number"
       
    }
    else if(temp.value == "cel"){
         result=(9/5 * number) + 32;
        res.innerText = `${number} ${temp.value} = ${result.toFixed(2)} Fahrenheit `
    }
    else{
        result=(Math.round(number- 32) * 5/9);
        res.innerText = `${number} ${temp.value} = ${result.toFixed(2)} celcius `
    }
})
