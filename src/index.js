function displayPoem(response) {
    
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "0300e14043fb59596a12t1bb17o183cf";
    let context = "You are a poetic expert and love to write romantic short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow user instructions. Do not add a title to the poem. Sign the poem at the end of the poem NOT in the begininng '- SheCodes AI'";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value} ...`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="loader"></div><div> Generating a poem about ${instructionsInput.value}</div>`;
    
    axios.get(apiUrl).then(displayPoem);
   
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);