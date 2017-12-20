# Compress Javascript and Css files

## Installation

	git clone https://github.com/betapcode/compress-files.git
    cd <folder git>
    npm install



## Usage

You may also provide files (js, css), create new file *-min.<js|css>

	node app.js --input=css/style.css 

To Overwrite old file `--overwrite=true` flag.

	node app.js --input=assets/js/jquery.js --overwrite=true
	
That's it. Pretty easy, huh?

## Changelog

* 0.0.1
	* Initial version, and support compress single files javascript and css
