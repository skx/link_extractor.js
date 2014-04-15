//
//  This file contains test-cases for the link-extractor module.
//
//  There is a single simple test within the script, the rest of the
// test-cases are dynamically loaded from beneath ./test.cases/
//
// Steve
// --
//
//




//
// Standard parts of the node.js library.
//
var fs     = require('fs');
var assert = require('assert');

//
//  Require our code.
//
var c = require( "./link_extractor" );



//
//  This is a simple test-case which is built-in to this script.
//
var text = '<p>This is a test <a href="http://example.com/">Example</a>, from <a href="http://steve.org.uk/">Steve Kemp</a>.</p>';

//
//  Extract the anchors
//
var result = c.extract( text );

//
//  Now ensure we found two.
//
assert(result.length == 2, "Our sample string has two links" );

//
//  And that each has the correct values.
//
assert(result[0]['text'] == "Example",
       "The first link has the correct anchor-text" )
assert(result[0]['link'] == "href=\"http://example.com/\"",
      "The first link has the correct URL" )

assert(result[1]['text'] == "Steve Kemp",
      "The second link has the correct anchor-text" )
assert(result[1]['link'] == "href=\"http://steve.org.uk/\"",
      "The second link has the correct URL" )



//
//  Now load the test-cases from beneath the test.cases/ directory.
//
try {

    //
    //  For each file in the direcotry.
    //
    var files = fs.readdirSync("./test.cases/");
    files.forEach(function(dirent) {

        //
        //  Read the file in its entirity.
        //
        var content = fs.readFileSync( "./test.cases/" + dirent,
                                       "utf8" );

        //
        //  Discover how many links we should expect.
        //
        var expected = 0;
        var reg = /links:([0-9]*)/gim;

        var match = reg.exec(content);
        if ( match )
        {
            expected = match[1];
        }

        //
        //  Ensure it is at least one.
        //
        assert( expected >0 ,
                "There is at least one link expected in test-case " + dirent );

        //
        //  OK now we know how many links  we should find we'll look for them.
        //
        var result = c.extract( content );

        //
        //  And test we found them.
        //
        assert( result.length == expected,
                "We found " + result.length + " links not " + expected + " in " + dirent );

    });
} catch ( e ) {
    //
    // Error reading/handling the tests.
    //
    console.log( "Error reading test-cases: " + e );
};
