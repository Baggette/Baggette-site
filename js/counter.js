function visitors() {
	const url = '/counter.txt'
	fetch(url).then(r => r.text()).then(t => {const count = document.getElementById('visitors').innerHTML = 'Visitors: ' + t});
}