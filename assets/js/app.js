// img.src = data[0].url

function getData() {
  const img = document.getElementById("img");

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((JSON) => (img.src = JSON.message));
}
