console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js'); //require file from relative path

var command = process.argv[2];

console.log('Command: ', command);
console.log(process.argv);

if (command === 'add'){
	console.log('Adding new note');
} else if (command === 'list'){
	console.log('Listing all notes');
} else if (command === 'read'){
	console.log('Reading note');
} else if (command === 'remove'){
	console.log('Removing note');
} else {
	console.log('Command not recognized');
}

// var filteredArray = _.uniq(["julia", "julia", 1,8,9,9,5,6,6,7,8]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));


// var res = notes.addNote();
// console.log(res);

// var sum = notes.add(9,-2);
// console.log(sum);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err){
// 	if (err){
// 		console.log('Unable to write to file');
// 	}
// });
