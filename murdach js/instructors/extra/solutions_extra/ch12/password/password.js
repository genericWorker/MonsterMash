"use strict";

const getRandomNumber = max => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
		random = random + 1;                // value is an integer between 1 and max
	}
	return random;
};

$(document).ready( () => {   
    $("#generate").click( () => {
        $("#password").val( "" ); // clear previous entry
    
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        let password = "";
        //var start, stop, char;

        // get password length entered by user
        const num = parseInt( $("#num").val() );

        // validate length
        if (isNaN(num)) {
            alert("Please enter a valid number");
        } else {
            // loop number of times entered by user - on each iteration...
            for (let i = 0; i < num; i++) {
                // get a random character from the chars string
                const start = getRandomNumber(chars.length);
                const stop = start + 1;
                const char = chars.substring(start, stop);

                // add the random character to the password string
                password += char;
            }
            // display the password string when the loop is done
            $("#password").val( password );
        }
    }); // end click()
    
    $("#clear").click( () => {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()