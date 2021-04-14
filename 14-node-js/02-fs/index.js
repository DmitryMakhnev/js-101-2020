const path = require('path');
const fs = require('fs');

fs.readFile(
  path.join('./text.txt'),
  'utf-8',
  (error, result) => {
    if (!error) {
      // console.log(JSON.parse(result));
      console.log(result);
    } else {
      console.log(error);
    }
  }
);

Promise.all([
  fs.promises.readFile(
    path.join('./data.json'),
    {
      encoding: 'utf-8'
    },
  ),
  fs.promises.readFile(
    path.join('./text.txt'),
    {
      encoding: 'utf-8'
    },
  )
])
  .then(([dataJson, text]) => {
    console.log(dataJson);
    console.log(text);
  })
  .catch(error => {
    console.log(error);
  })



