"use strict";

(function($){
    $.fn.alternateRows = function(options) {
        var o = $.extend({
            "headerClass" : "header",
            "evenClass" : "even",
            "oddClass" : "odd"
        }, options);
        
        return this.each(function() {
            
            var rows = this.getElementsByTagName("tr");
            var th;

            for (var i = 0; i < rows.length; i++) {
                // first check if it's a header row (ie, see if row has header cells)
                th = rows[i].getElementsByTagName("th");

                // if so, set header css class
                if (th.length > 0) {
                    rows[i].className = o.headerClass;

                // otherwise, set class based on odd or even loop counter variable
                } else {
                    if (i % 2 === 0) {
                        rows[i].className = o.evenClass;
                    } else {
                        rows[i].className = o.oddClass;
                    }
                }
            }
            
        });  // end each function
    };       // end alternateRows function
})(jQuery);  // invoke IIFE and import jQuery object