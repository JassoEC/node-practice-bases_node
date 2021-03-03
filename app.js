const { createFile } = require("./helpers/multiply");
const argv = require("yargs").argv;

console.clear();

console.log(argv);

/* createFile(base)
  .then((response) => console.log(response, " creado"))
  .catch((err) => console.log(err));
 */
