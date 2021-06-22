$(document).ready( () => {
	$("#faq_rollovers h2").hover(
		evt => {
			const h2 = evt.currentTarget;
			$(h2).next().show();
		},
		evt => {
			const h2 = evt.currentTarget;
			$(h2).next().hide();
		}
	); // end hover
}); // end ready