let btn=document.querySelector(".btn")

btn.addEventListener("click",() => {
    let element = document.createElement("div");
    element.classList.add('.box');
    element.innerHTML="This is a box"
    console.log(element)
    document.body.appendChild(element)

})
    
