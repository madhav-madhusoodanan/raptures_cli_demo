const fs = require("fs/promises");
const { parse, stringify } = require("yaml");

module.exports.readData = async () => {
  return parse(await fs.readFile("data.yaml"));
};
module.exports.writeData = async (data) => {
  await fs.writeFile("data.yaml", stringify(data));
};
module.exports.addData = async (key, value) => {
  const oldData = parse(await fs.readFile("data.yaml"));
  if (oldData?.key) return;
  oldData[key] = value;
  await fs.writeFile("data.yaml", stringify(oldData));
};
module.exports.removeData = async (key) => {
  const oldData = parse(await fs.readFile("data.yaml"));
  oldData[key] = undefined;
  await fs.writeFile("data.yaml", stringify(oldData));
};
