// Check If There's Local Storage Color option
let mainColors  = localStorage.getItem("color_option");
console.log(mainColors)
if (mainColors !== null) {
    document.documentElement.style.setProperty('--main--color', localStorage.getItem("color_option"))
}
// Toggle Settings
document.querySelector(".toggle-settings .fa-gear").onclick = function() {
    this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
}

//Switch Colors
const colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach(li => {
    li.addEventListener("click", (e) => {
        // Set Color On Root
        document.documentElement.style.setProperty("--main--color",e.target.dataset.color);
        // Set Color On Local Storage 
        localStorage.setItem("color_option",e.target.dataset.color)
        // Remove Active Class From All childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
        //Add Active Class on self
        e.target.classList.add("active");
    })
})

// select Landing page element 
let landingPage = document.querySelector(".landing-page")
// Get Array of Pic Background
let picArray = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg"
]

// Change Bachground images URL
landingPage.style.backgroundImage = 'url("imgs/01.jpg")'

//GET Random Number
let randomNumber = Math.floor(Math.random() * picArray.length)
setInterval( () => {
    //GET Random Number
    let randomNumber = Math.floor(Math.random() * picArray.length)
   // Change Bachground images URL
    landingPage.style.backgroundImage = 'url("imgs/'+ picArray[randomNumber] + '")'
}, 10000);