//
// Extract links (simple/naive) from Javascript Strings.
//
//   *  https://github.com/skx/link_extractor.js
//
// Steve
// --
//


(function ()
 {
     //
     //  Extract links from the given text.
     //
     function extract( text ) {
         var results = new Array();

         //
         // Regexps for different linking formats.
         //
         var regexp = [
                 /<a([^>]+)>([^<]+)<\/a>/gi,
                 /\[url=(.+?)\](.+?)\[\/url\]/gi,
                 /\[link=(.+?)\](.+?)\[\/link\]/gi,
                 /\[(https?:\/\/[^ \t]+) ([^\]]+)\]/gi,
         ];

         //
         //  Look for each regexp in our list.
         //
         regexp.forEach(function(test){

             var m;

             while( m = test.exec(text) )
             {
                 //
                 //  Add the result to our return values.
                 //
                 if (m && m[2] )
                 {
                     var h = new Object();
                     h['link'] = m[1].trim()
                     h['text'] = m[2].trim()
                     results.push( h );
                     console.log( "Link : " + h['link'] + " Anchor:" + h['text'] );
                 }
             }
         });
         return( results );
     };


     //
     // Export our public API
     //
     var exports = {};
     exports.link_extractor = extract;
     exports.extract = extract;

     module.exports  = exports;
}());
