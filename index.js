var base64EncodeDecode = require('./base64-encode-decode');

function base64Encode(str) {
	return base64EncodeDecode.Base64.encode(str); 
}

function base64Decode(str) {
	return base64EncodeDecode.Base64.decode(str); 
}	

module.exports = {
	base64Encode: base64Encode,
	base64Decode: base64Decode
}