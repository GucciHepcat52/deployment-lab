const form = document.querySelector("form");
const input = document.getElementById("input")

const submitHandler = (event) => {
  event.preventDefault();

  axios
    .post("/api/classes", { type: input.value })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

form.addEventListener("submit", submitHandler);
