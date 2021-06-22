"use strict";

(function($){
    $.fn.alternateRows = function() {
        return this.each(function() {
            
            var rows = this.getElementsByTagName("tr");
            var th;

            for (var i = 0; i < rows.length; i++) {
                // first check if it's a header row
                th = rows[i].getElementsByTagName("th");

                // if so, set header css class
                if (th.length > 0) {
                    rows[i].className = 'header';

                // otherwise, set class based on odd or even loop counter variable
                } else {
                    if (i % 2 === 0) {
                        rows[i].className = 'even';
                    } else {
                        rows[i].className = 'odd';
                    }
                }
            } // end for loop
            
        });   // end each function
    };        // end alternateRows function
})(jQuery);   // invoke IIFE and import jQuery object