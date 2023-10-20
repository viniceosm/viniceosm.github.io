var anoInicioTrabalho = 2016;

window.addEventListener('load', function () {
	document.querySelector('#anos-idade').innerHTML = calculateAge(new Date(1998, 2, 28));
	document.querySelector('#ano-atual').innerHTML = (new Date).getFullYear();
	document.querySelector('#anos-trabalhando').innerHTML = (new Date).getFullYear() - anoInicioTrabalho;
});

function calculateAge(birthday) { // birthday is a date
	var ageDifMs = Date.now() - birthday.getTime();
	var ageDate = new Date(ageDifMs); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}
