console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); //require file from relative path

const argv = yargs.argv
var command = argv._[0];

console.log('Yargs: ', argv);
//console.log('Process ', process.argv);
console.log('Command ', command);

if (command === 'add'){
	var note = notes.addNote(argv.title, argv.body);
	if (note === undefined){
		console.log('Note title already in use.');
	}
	else {
		console.log('Note created');
		console.log('--');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	}
} else if (command === 'list'){
	notes.getAll();
} else if (command === 'read'){
	notes.getNote(argv.title);
} else if (command === 'remove'){
	notes.removeNote(argv.title);
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
