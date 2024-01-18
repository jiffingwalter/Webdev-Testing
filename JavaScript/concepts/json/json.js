// JSON - javascript object notation
//      used for exchanging data between server and web apps
// useful methods:
//      json.stringify() = converts JS object into a JSON string
//      json.parse() = converts a JSON string into js object

// js object to json string
const peeps = [
    {
        "name":"guy 1",
        "age":30,
        "isEmployed":true,
        "hobbies":["bug collecting","karate"]
    },
    {
        "name":"guy 2",
        "age":25,
        "isEmployed":true,
        "hobbies":["bro stuff","golf"]
    },
    {
        "name":"guy 3",
        "age":38,
        "isEmployed":false,
        "hobbies":["drinking IPAs","being a man"]
    }
];
const jsonString = JSON.stringify(peeps);
console.log(jsonString);

// json string to js object
const peepsString = `[{"name":"guy 1","age":30,"isEmployed":true,"hobbies":["bug collecting","karate"]},{"name":"guy 2","age":25,"isEmployed":true,"hobbies":["bro stuff","golf"]},{"name":"guy 3","age":38,"isEmployed":false,"hobbies":["drinking IPAs","being a man"]}]`;
const jsonParsed = JSON.parse(peepsString);
console.log(jsonParsed);


// FETCHING - used to make HTTP requests to get reosurces, such as JSON files, data, images, files, etc
//      simplifies async data fetching and used for interacting with APIs to retrieve and send data async'ly over the web
//      can also be used with local paths to get files and such
// syntax = fetch(url, {options})

fetch("names.json")
    .then(response=> response.json())
    .then(value => {console.log(`Fetching names json file...`);console.log(value)})
    .catch(error => console.error(error));

// pokemon fetching example - gets info from an api
// method one - direct promise handling
// fetch("https://pokeapi.co/api/v2/pokemon/regigigas")
//     .then(response => {
//         if (!response.ok){
//             throw new Error("Could not find Pokemon");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error));

// pokemon fetching program
const pokeNameId = document.getElementById("pokeNameID");
const pokeSprite = document.getElementById("pokeSprite");
const inputForm = document.getElementById("inputForm");

inputForm.addEventListener('submit',(event)=>{
    event.preventDefault(); // prevent page reloading
});

async function fetchData(){
    try{
        const pokeInput = document.getElementById("pokeInput").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`);
        if (!response.ok){
            throw new Error("Could not find Pokemon");
        }

        // display
        const data = await response.json();
        pokeNameId.textContent = `${data.name} - #${data.id}`;
        pokeSprite.src = data.sprites.front_default;
        pokeSprite.style.visibility = "visible";
    } catch(error){
        console.error(error);
        pokeNameId.textContent = `Could not find Pokemon with name "${pokeInput.value}" - check spelling and try again`;
        pokeSprite.style.visibility = "hidden";
        
    }
}