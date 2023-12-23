const path = require('path');

const filename = path.join('/content', 'subfolder', 'test.txt')

console.log(filename);

console.log(path.basename(filename));

const fullpath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(fullpath);