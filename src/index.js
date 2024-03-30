function displayJoke(response) {
  new Typewriter("#joke-window", {
    strings: response.data.answer,
    cursor: "",
    autoStart: true,
  });
}

function generateJoke(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  let input = document.querySelector("#text-field");

  let apiKey = "49t1f4o8a06a34d2d2bcfda963fe315f";
  let prompt =
    "You are a funny german native who loves to tell innocent jokes and make people laugh. You are telling a joke about the topic from the user instructions and diplay the joke in html. The joke is a maximum of 8 lines long and in german language. Please separate every line by a <br/> and sign after a <br/> with 😉 AI at the bottom.";
  let context = `User instructions: Tell us a joke about ${input.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayJoke);
}

let jokeForm = document.querySelector("#joke-generator-form");
jokeForm.addEventListener("submit", generateJoke);
