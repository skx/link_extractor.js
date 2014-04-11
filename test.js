//
//  Require our code.
//
var c = require( "./link_extractor" );

//
// Use the node.js assert module to validate our code.
//
var assert = require('assert');

//
// Does an IP come from within the given range?
//
var text = '<p>This is a test <a href="http://example.com/">Example</a>, from <a href="http://steve.org.uk/">Steve Kemp</a>.</p>';

var result = c.extract( text );
assert(result.length == 2 );

var bb = '[url=http://example.com/]Example[/url]>, from [url="http://steve.org.uk/"]Steve Kemp[/url]';

var r2 = c.extract( bb );
assert(r2.length == 2 );
