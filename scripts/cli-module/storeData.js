const fs = require('fs/promises');
import { parse, stringify } from 'yaml'

module.exports.readData = async () => {
    return parse(await fs.readFile('data.yaml'))
}

module.exports.writeData = async(data) => {
    await fs.writeFile('data.yaml', stringify(data))
}