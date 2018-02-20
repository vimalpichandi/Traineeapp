#!/usr/bin/env node
 
/**
 * Module dependencies.
 */
 
var exec = require('child_process').exec;

exec('node node_modules/meagerjs/application/core/copy.js', function (error, stdOut, stdErr) {
    // do what you want!
    if (error) {
        console.log("\n"+stdErr);
    } else {
        console.log('Meager framework has been cloned to your current directory');
        //console.log(stdout);
    }
 
}); 
