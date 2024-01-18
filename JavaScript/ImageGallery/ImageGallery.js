// image slider

const slides = document.querySelectorAll("img.slide");
let index = 0;
let intervalId = 0;

document.addEventListener("DOMContentLoaded", initializeSlider); // tells page to wait for all DOM content to load before running this function

function initializeSlider(){
    if(slides.length > 0){
        slides[index].classList.add("displaySlide");
        resetInterval();
    }
    console.log(`current index: ${index}`);
}
function showSlide(indexIn){
    
    if(indexIn >= slides.length){
        index = 0;
        console.log(`hit the end, resetting index to ${index}`);
    } else if (indexIn < 0){
        index = slides.length-1;
        console.log(`hit the beginning, resetting index to ${index}`);
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[index].classList.add("displaySlide");
    console.log(`current index: ${index}`);
}
function prevSlide(mode){
    if(mode === 'manual') resetInterval();
    index--;
    showSlide(index);
}
function nextSlide(mode){
    if(mode === 'manual') resetInterval();
    index++;
    showSlide(index);
}

function resetInterval(){ // creates or resets the time interval on slide change or when a user resets manually
    if(intervalId != 0){
        clearInterval(intervalId);
    }
    intervalId = setInterval(nextSlide, 5000);
}