const fs = require("fs/promises")
const { parse, stringify } = require("yaml")

const readData = async () => {
    return parse(await fs.readFile("./data.yaml", { encoding: "ascii" }))
}
const writeData = async (data) => {
    await fs.writeFile("./data.yaml", stringify(data), { encoding: "ascii" })
}
const addData = async (key, value) => {
    const oldData = parse(await fs.readFile("./data.yaml"))
    if (oldData?.key) return
    oldData[key] = value
    await fs.writeFile("./data.yaml", stringify(oldData))
}
const removeData = async (key) => {
    const oldData = parse(await fs.readFile("./data.yaml"))
    oldData[key] = undefined
    await fs.writeFile("./data.yaml", stringify(oldData))
}

module.exports.readData = readData;
module.exports.writeData = writeData;
module.exports.addData = addData;
module.exports.removeData = removeData;
// const main = async () => {
//     await writeData({ DATA: "data" })
//     const data = await readData()
//     console.log(data)
// }

// main()
