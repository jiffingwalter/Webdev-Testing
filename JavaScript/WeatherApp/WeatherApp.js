// weather app logic
//initialization
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const errorDisplay = document.createElement("p");
const apiKey = "a207b912f120defb578a314eafc5e045";

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();
    displayError("clear");

    const city = cityInput.value;
    
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch(error){
            console.log(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city");
    }
})

async function getWeatherData(city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiURL);
    if (!response.ok){
        throw new Error("Could not fetch data for the given city");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    generateCard();
    const cityDisplay = document.querySelector(".cityDisplay");
    const tempDisplay = document.querySelector(".tempDisplay");
    const humidityDisplay = document.querySelector(".humidityDisplay");
    const descDisplay = document.querySelector(".descDisplay");
    const emojiDisplay = document.querySelector(".weatherEmoji");
    
    const {
        name: city,
        main:{temp, humidity},
        weather:[{description, id}]
    } = data;

    card.style.display = "block";
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    emojiDisplay.textContent = getWeatherEmoji(id);
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❔";
    }
}

function displayError(message){
    if(message === "clear"){
        errorDisplay.style.display = "none";
        return;
    }
    errorDisplay.style.display = "block";
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    weatherForm.append(errorDisplay);
}

function generateCard(){ // generates card html template if it doesn't already exist
    if(card.innerHTML == ""){
        card.innerHTML = `<div class="card-flex">
                            <div class="card-col-info">
                                <h1 class="cityDisplay"></h1>
                                <p class="tempDisplay"></p>
                                <p class="humidityDisplay"></p>
                                <p class="descDisplay"></p>
                            </div>
                            <div class="card-col-emoji">
                                <p class="weatherEmoji"></p>
                            </div>
                        </div>`;
    }
}