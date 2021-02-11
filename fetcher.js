const fs = require('fs');
const http = require('http');


const downloadPage = (url, dest, cb) => {
  let file = fs.createWriteStream(dest);
  http.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(cb);
    });
  });
};


downloadPage('http://www.google.com', './testfile4.html');
