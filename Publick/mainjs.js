
// navbar
$("#togler").click( () => { 
    $("#navLinks").toggleClass("active");
});

$(window).scroll(function() {
    $(".nav,.Logo").addClass("scroll");
});

// carousel

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// faq
const acLabel = document.querySelectorAll(".accordion-header");
const acContent = document.querySelectorAll(".accordion-body");

acLabel.forEach(btn => {
    btn.addEventListener("click", () => {
        const text = btn.nextElementSibling;
        text.classList.toggle("active");
        btn.classList.toggle("active");
    });
});

// galeryImg
const backEfect = document.createElement("div");
backEfect.id="backEfect"
document.body.appendChild(backEfect);

const images = Array.from(document.getElementsByClassName('galeryImg'));
images.forEach(box => {
    box.addEventListener("click", () => {
        backEfect.classList.add("active");
        const img = document.createElement("img");
        img.src = box.src
        while (backEfect.firstChild){
            backEfect.removeChild(backEfect.firstChild)
        }
        backEfect.appendChild(img);
    });
})

backEfect.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget )
    return;
    backEfect.classList.remove("active");
})


// joker

document.getElementById("joker").addEventListener("click", function(){
    fetch("https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,religious,political,racist,explicit&type=single")
    .then((response) =>{
    return response.json();
    }).then(data =>{
        let jokeP = document.getElementById("joke")
        let length = (jokeP.innerHTML.length);
        if (length = 4){
        jokeP.innerHTML=data.joke;}
    }).catch((err) =>{
        jokeP.innerHTML = "No time for jokes"
    });
    
})


