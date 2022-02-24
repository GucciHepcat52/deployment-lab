const form = document.querySelector("form");
const input = document.getElementById("input");
// const displayButton = document.querySelector("button");

const submitHandler = (event) => {
  event.preventDefault();

  axios
    .post("/api/classes", { type: input.value })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

form.addEventListener("submit", submitHandler);

// const createClassDisplay = (event) => {
//   event.preventDefault();

//   axios
//     .get("/api/classes")
//     .then((res) => {
//       document.body.innerHTML(`<p>${res.data}</p>`);
//     })
//     .catch((error) => console.log(error));
// };

// displayButton.addEventListener("click", createClassDisplay);
