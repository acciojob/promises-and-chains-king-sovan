document.getElementById('ageForm').addEventListener('submit', function (event) {
	event.preventDefault();

	const name = document.getElementById('name').value;
	const age = document.getElementById('age').value;

	if (!name || !age) {
		alert('Please enter valid details');
		return;
	}

	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (parseInt(age) > 18) {
				resolve();
			} else {
				reject();
			}
		}, 4000);
	})
	.then(() => {
		alert(`Welcome, ${name}. You can vote.`);
	})
	.catch(() => {
		alert(`Oh sorry Doe. You aren't old enough.`);
	});
});