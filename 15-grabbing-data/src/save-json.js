const fs = require('fs');

const saveJSON = (path, json) => fs.promises.writeFile(
  path,
  JSON.stringify(json, null, 2),
  {
    encoding: 'utf-8'
  }
);

module.exports = {
  saveJSON,
};
