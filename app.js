console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js'); //require file from relative path

var res = notes.addNote();
console.log(res);

var sum = notes.add(9,-2);
console.log(sum);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err){
// 	if (err){
// 		console.log('Unable to write to file');
// 	}
// });