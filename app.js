const { createFile } = require("./helpers/multiply");

console.clear();
const base = 8;

createFile(base)
  .then((response) => console.log(response, " creado"))
  .catch((err) => console.log(err));
