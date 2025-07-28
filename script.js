let button = document.querySelector("button");
let adviceId = document.querySelector(".adviceId");
let adviceText = document.querySelector(".adviceText");

apiUrl = "https://api.adviceslip.com/advice";

function newText() {
  apiUrl = "https://api.adviceslip.com/advice";
  let reply = fetch(apiUrl)
    .then((res) => res.json())
    .then(
      (data) =>
        (document.querySelector(".adviceText").innerHTML = data.slip.advice)
    );

  let reply2 = fetch(apiUrl)
    .then((res) => res.json())
    .then(
      (data) => (document.querySelector(".adviceId").innerHTML = data.slip.id)
    );
}

button.addEventListener("click", newText);
