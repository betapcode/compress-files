'use strict'
/**
 * Created by betapcode on 12/20/17.
 * @author betapcode<betapcode@gmail.com>
 * @version 0.0.1
 * @copyright TamtayGlobal - Dark9 Team
 * @description - Compress javascript and css files
 */
const compressor    = require('node-minify');
const flags         = require('flags');
const utils         = require('./utils');

flags.defineString('output', null, 'Save file to direct folders');
flags.defineString('input', null, '');
flags.defineString('overwrite', false, '');
flags.parse();
let outputFlag      = flags.get('output');
let inputFile       = flags.get('input');
let overwrite       = flags.get('overwrite');

// check info file
let info = utils.getFileInfo(inputFile);

let compressorType  = "yui";
let output_mini     = info.dirname + "/" + info.name + "-min" + info.extname;
if (overwrite) {
    output_mini     = inputFile;
}
let oldFileSize     = utils.getFilesizeInBytes(inputFile);
let typeName        = "CSS";
switch(info.extname) {
    case ".css":
        console.log("Input file css");
        compressorType = "yui";
        typeName    = "CSS";
        break;
    case ".js":
        console.log("Input file js");
        compressorType = "yui-js";
        typeName    = "JS";
        break;
    default:
        console.log("Default Input file css");
        compressorType = "yui";
}

compressor.minify({
    compressor: compressorType,
    input: inputFile,
    output: output_mini,
    callback: function(err, min) {
        let currentFileSize = utils.getFilesizeInBytes(output_mini);
        console.log("[" + typeName + "] Compress success oldFileSize(" + oldFileSize + ") => currentFileSize("+ currentFileSize +")");
    }
});