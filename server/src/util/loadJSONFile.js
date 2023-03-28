const fs = require('fs');

const loadJSONFile = async (file) => {

    try {
        const data = await fs.promises.readFile(file);
        const jsonData = JSON.parse(data);

        return jsonData;
    } catch (error) {
        console.log('Error loading .json file.');
        console.log(error);
    }
}

module.exports = loadJSONFile;
