/* @title: <<nodejs-filesystem>> program written in Node.js.
 * @desc: A simple application using filesystem module.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.0
 */

const filesystem = require('./file');

// Create the local folder
filesystem.createFolder();

// Create some json files in the local folder
filesystem.createFile('file-001.json', 'Hello World from the first json file !');
filesystem.createFile('file-002.json', 'Hello World from the second json file !');
filesystem.createFile('file-003.json', 'Hello World from the third json file !');

// Return the list of files present in the local folder
filesystem.listFiles();