"use strict";
var Promise = require('promise');

module.exports = function(execGit) {
    return function(){
        return new Promise(function(resolve, reject){
            var head = (process.platform === 'win32') ? "^HEAD" : "HEAD^"
            execGit("reset --soft " + head, function(err){
                if(err){
                    reject(err);
                } 
                else {
                    resolve();
                }
            });
        });
    }
};
