const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

const createFile = (base = 5) => {
  return new Promise((resolve, reject) => {
    try {
      let output = "";

      for (let i = 1; i <= 10; i++) {
        let operator = base * i;
        output += `Resultado: ${operator} \n`;
      }
      const fileName = `table${base}.txt`;
      fs.writeFileSync(fileName, output);
      resolve(fileName);
    } catch (error) {
      reject(error);
    }
  });
};

const createFileNoPromise = async (base = 5) => {
  try {
    let output = "";

    for (let i = 1; i <= 10; i++) {
      let operator = base * i;
      output += `Resultado: ${operator} \n`;
    }
    const fileName = `table${base}.txt`;
    fs.writeFileSync(fileName, output);
    return fileName;
  } catch (error) {
    throw error;
  }
};

module.exports = { createFile };
