const form = document.querySelector("form");

const buttonAlert = (event) => {
  event.preventDefault();

  let inputValue = input.value;
  alert(`Your favorite class is ${inputValue}`);
  console.log("button hit");
};

form.addEventListener("submit", buttonAlert);
