/* @title: <<nodejs-filesystem>> program written in Node.js.
 * @desc: A simple application using filesystem module.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.0
 */

const path = require('path');
const fs = require('fs');

// Constants declaration
const _FOLDER_NAME_ = 'data';
const _FOLDER_PATH_ = path.join(__dirname, _FOLDER_NAME_);


// Function enables a folder creation
module.exports.createFolder = function () {
    if (fs.existsSync(_FOLDER_PATH_) == false) {
        fs.mkdir(_FOLDER_PATH_, {}, err => {
            if (err) throw err;
            console.log(`Folder ${_FOLDER_NAME_} has ben created...`);
        });
    }
};


// Function enables a file creation
module.exports.createFile = function (name, content) {
    let file = path.join(__dirname, '/data', name);
    if (fs.existsSync(file) == false) {
        fs.writeFile(file, content, err => {
            if (err) throw err;
            console.log(`File ${name} has been created...`);
        });
    }
};


// Function retrieves a list of files in a folder
module.exports.listFiles = function () {
    fs.readdir(_FOLDER_PATH_, function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            console.log(`Folder: ${path.dirname(_FOLDER_PATH_)} | File: ${path.basename(file)} | Extension: ${path.extname(file)}`);
        });
    });
};
