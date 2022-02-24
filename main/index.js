const form = document.querySelector("form");
const input = document.querySelector("input")

const submitHandler = (event) => {
  event.preventDefault();

  axios
    .post("/api/classes", { class: input.value })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

form.addEventListener("submit", submitHandler);
