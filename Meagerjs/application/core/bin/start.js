#!/usr/bin/env node
 
/**
 * Module dependencies.
 */
 
var exec = require('child_process').exec;
/*
exec('node meagerjs/start.js', function (error, stdOut, stdErr) {
    // do what you want!
      if (error) {
        console.log("\n"+stdErr);
    } else {
        console.log(stdout);
    }
}); */
/*
var meagerProcess_cd = exec('cd meagerjs/');

meagerProcess_cd.stdout.on('data', function(data) {
    console.log(data); 
});
*/
var meagerProcess_start = exec('node start.js');

meagerProcess_start.stdout.on('data', function(data) {
    console.log(data); 
});

/*
 //console.log('Starting directory: ' + process.cwd());
	try {
	  process.chdir('/meagerjs');
	  console.log('Current directory: ' + process.cwd());

               var meagerProcess_start = exec('node start.js');

		meagerProcess_start.stdout.on('data', function(data) {
		    console.log(data); 
		});

	}
	catch (err) {
	  console.log('chdir: ' + err);
	}
*/
/*
//var exec = require('child_process').exec;
var script = "var exec = require('child_process').exec;exec('dir',function(e,d,er){console.log(d);});";
//script = '"'+script+'"';//enclose the inline script with "" because it contains spaces
//var cmd2 = 'node -e '+script;
var cmd2 = 'node start.js';
var meagerProcess_start = exec('cd meagerjs/ &'+cmd2,function(err,stdout,strerr)
{
    console.log(stdout);//this would work
})
meagerProcess_start.stdout.on('data', function(data) {
		    console.log(data); 
		});
*/


