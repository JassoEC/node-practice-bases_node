const { createFile } = require("./helpers/multiply");
console.clear();

const [, , baseParam = "--base=5"] = process.argv;
const [, base = 5] = baseParam.split("=");

createFile(base)
  .then((response) => console.log(response, " creado"))
  .catch((err) => console.log(err));
