let settingBtn = document.querySelector(".settingBtn")
let dropDown = document.querySelector(".dropDown")
let tasks = document.querySelector(".tasks")

settingBtn.addEventListener("click" , () => {
    console.log("first")
    dropDown.classList.toggle("toggle")
})