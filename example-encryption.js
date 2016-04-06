var crypto = require('crypto-js');

var secretMessage = {
	name: 'Yosafat',
	secretName: '007'
};
var secretKey = 'ilp357thu';

// ENCRYPT MESSAGE
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

// DECRYPT MESSAGE
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted Message: ' + decryptedMessage);
console.log(decryptedMessage.secretName);
