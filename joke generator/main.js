const jokeInput = document.getElementById("joke");
const getJoke = document.getElementById("get_joke").addEventListener("click", generateJoke);

generateJoke();
async function generateJoke() {
  const jokeResult = await fetch("https://icanhazdadjoke.com/", {

    headers: {
      "Accept": "application/json"
    }
  });

  const joke = await jokeResult.json();

  jokeInput.innerHTML = joke.joke;
}