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


Notes
-----

This code was abstracted from the [blogspam.js](https://github.com/skx/blogspam.js) repository.


License
-------

Please consider this licensed under the two-clause BSD license, included in the
file [LICENSE](LICENSE).


Steve
---
