console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  // console.log('form submit');
  alert("Submitted");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const rubberDuck = document.getElementById("rubberDuck");
rubberDuck.addEventListener("mouseover", function () {
  alert("You found the duck, Good Job!");
});
