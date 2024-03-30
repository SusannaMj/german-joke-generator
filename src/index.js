function generateJoke(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  new Typewriter("#joke-window", {
    strings: "Joke comes here...",
    autoStart: true,
  });
}

let jokeForm = document.querySelector("#joke-generator-form");
jokeForm.addEventListener("submit", generateJoke);
