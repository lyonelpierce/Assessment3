let buttons = document.querySelectorAll("button");

let alertFunction = (e) => {
  let button = e.target.getAttribute("id"),
    data = "";
  if (button == "color") {
    let data = "red";
    alert(`My favorite ${button} is ${data}`);
  } else if (button === "place") {
    let data = "Brooklyn Bridge";
    alert(`My favorite ${button} is ${data}`);
  } else {
    let data = "Sleep listening to nature sounds";
    alert(`My favorite ${button} is ${data}`);
  }
};

for (let button of buttons) {
  button.addEventListener("click", alertFunction);
}
