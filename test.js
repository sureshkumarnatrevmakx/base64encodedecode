var base64 = require('./index');

console.log(base64.base64Encode('nodejs'));

console.log(base64.base64Decode('bm9kZWpz'));

console.log(base64.base64Decode(base64.base64Encode('nodejs')));

