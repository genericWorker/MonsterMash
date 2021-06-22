"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	// code for the tabs widget
	$("#tabs").tabs();
	
	// code for the datepicker widget
	$("#arrival_date").datepicker({
		minDate: new Date(),
		maxDate: +90
	});

	// the handler for the click event of the button
	// that displays the hotel's policies
	$("#policies").click( () => {
		$("#dialog").dialog({modal: true });
	});
	
	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#reservation_form").submit( evt => {
			let isValid = true;
			
			// validate the requested arrival date
			const arrivalDate = $("#arrival_date").val().trim();
			if (arrivalDate == "") {
				$("#arrival_date").next().text("This field is required.");
				isValid = false;
			} else {
				$("#arrival_date").next().text("");				
			}
			$("#arrival_date").val(arrivalDate);
			
			// validate the number of nights
			const nights = $("#nights").val().trim();
			if (nights == "") {
				$("#nights").next().text("This field is required.");
				isValid = false;
			} else if (isNaN(nights)) {
				$("#nights").next().text("Must be numeric.");
				isValid = false;
			} else {
				$("#nights").next().text("");
			}
			$("#nights").val(nights);			
			
			// validate the name entry
			const name = $("#name").val().trim();
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#name").next().text("");
			}
			$("#name").val(name);
						
			// validate the email entry with a regular expression
			const email = $("#email").val().trim();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email); 
			
			// validate the phone number
			const phone = $("#phone").val().trim();
			if (phone == "") { 
				$("#phone").next().text("This field is required.");
				isValid = false; 
			} else {
				$("#phone").next().text("");
			}
			$("#phone").val(phone);
			
			// prevent the submission of the form if any entries are invalid 
			if (!isValid) {
				evt.preventDefault();				
			}
		} // end function
	);	// end submit
}); // end ready