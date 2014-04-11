(function ()
 {
     //
     //  Extract links from the given text.
     //
     function extract( text ) {
         var results = new Array();

         //
         // Regexps for different links.
         //
         var regexp = [ /<a([^>]+)>([^<]+)<\/a>/gi,
                        /\[url=([^\]]+)\]([^\[]+)\[\/url\]/gi ];

         regexp.forEach(function(test){

             var m;

             while( m = test.exec(text) )
             {
                 if (m && m[2] )
                 {
                     var h = new Object();
                     h['link'] = m[1].trim()
                     h['text'] = m[2].trim()
                     results.push( h );

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
