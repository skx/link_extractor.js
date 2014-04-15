link_extractor
--------------

This is a simple `node.js` module for extracting hyperlinks from javascript
strings.

It currently understands HTML & BBCode when it comes to parsing.


Installation
------------

You should be able to install this module by executing:

    $ npm install link_extractor

Failing that you can clone the repository, and load the code via:

    require( "./link_extractor" );


Examples
--------

     //
     // Use the node.js assert module to validate our code.
     //
     var c      = require( "link_extractor" );
     var assert = require('assert');

     //
     // Did we find one link from the given string?
     //
     result = c.extract( '<p>This is a <a href="http://example.com/">test</a> ... </p>' );
     assert( result.length == 1 )

     //
     //  Is the single result the correct one?
     //
     assert(result[0]['text'] == "test",
            "The first link has the correct anchor-text" )
     assert(result[0]['link'] == "href=\"http://example.com/\"",
            "The first link has the correct URL" )


Notes
-----

This code was abstracted from the [blogspam.js](https://github.com/skx/blogspam.js) repository.


License
-------

Please consider this licensed under the two-clause BSD license, included in the
file [LICENSE](LICENSE).


Steve
---
