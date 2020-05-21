// Toggle Settings
document.querySelector(".toggle-settings .fa-gear").onclick = function() {
    this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
}

//Switch Colors
const colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach(li => {
    li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color)

        // Set ColoR On Root
        document.documentElement.style.setProperty("--main--color","e.target.dataset.color")
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