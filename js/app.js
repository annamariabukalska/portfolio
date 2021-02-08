function openlinkedin() {
	window.open("https://www.linkedin.com/in/annamariabukalska/")

	gtag('event', 'click', {
		'event_category': 'outbound',
		'event_label': "open-facebook",
		'transport_type': 'beacon',
	});
}

function openGitHub() {
	window.open("https://github.com/annamariabukalska")

	gtag('event', 'click', {
		'event_category': 'outbound',
		'event_label': "open-instagram",
		'transport_type': 'beacon',
	});
}

function emailAnna() {
	window.open("mailto:annamariabukalska@gmail.com", '_self');
	gtag('event', 'click', {
		'event_category': 'outbound',
		'event_label': "email-anna",
		'transport_type': 'beacon',
	});
}
