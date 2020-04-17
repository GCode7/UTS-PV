let mainForm = document.getElementById('form');
let fromSelector = document.getElementById('from');
let toSelector = document.getElementById('to');
let result = document.getElementById('result');

let celciusOpt = document.getElementById('celcius');
let fahrenheitOpt = document.getElementById('fahrenheit');
let reamurOpt = document.getElementById('reamur');
let kelvinOpt = document.getElementById('kelvin');

function hideOption(optionId){
	document.querySelector(`#${optionId}`).setAttribute('hidden', true);

	if (fromSelector.value.toLowerCase() === 'fahrenheit') {
		kelvinOpt.setAttribute('hidden', true);
	}

	if (fromSelector.value.toLowerCase() === 'kelvin') {
		fahrenheitOpt.setAttribute('hidden', true);
	}
}

function refreshOption(){
	toSelector.removeAttribute('disabled');
	toSelector.selectedIndex = 0;
	celciusOpt.removeAttribute('hidden');
	fahrenheitOpt.removeAttribute('hidden');
	reamurOpt.removeAttribute('hidden');
	kelvinOpt.removeAttribute('hidden');
	result.value = "";
}

function convert(){
	let convertResult = 0;
	let fromValue = parseInt(document.getElementById('from-value').value);
	switch(toSelector.value.toLowerCase()){
		case 'celcius':
			if (fromSelector.value.toLowerCase() === 'reamur') {
				convertResult = Math.round(5 / 4 * fromValue);
			}

			if (fromSelector.value.toLowerCase() === 'fahrenheit') {
				convertResult = Math.round(5 / 9 * (fromValue - 32));
			}

			if (fromSelector.value.toLowerCase() === 'kelvin') {
				convertResult = fromValue - 273;
			}
			break;

		case 'reamur':
			if (fromSelector.value.toLowerCase() === 'celcius') {
				convertResult = Math.round(4 / 5 * fromValue);
			}

			if (fromSelector.value.toLowerCase() === 'fahrenheit') {
				convertResult = Math.round(4 / 9 * (fromValue - 32));
			}

			if (fromSelector.value.toLowerCase() === 'kelvin') {
				convertResult = Math.round(4 / 5 * (fromValue - 273));
			}
			break;

		case 'fahrenheit':
			if (fromSelector.value.toLowerCase() === 'celcius') {
				convertResult = Math.round(9 / 5 * fromValue + 32);
			}

			if (fromSelector.value.toLowerCase() === 'reamur') {
				convertResult = Math.round(9 / 4 * fromValue + 32);
			}
			break;

		case 'kelvin':
			if (fromSelector.value.toLowerCase() === 'celcius') {
				convertResult = fromValue + 273;
			}

			if (fromSelector.value.toLowerCase() === 'reamur') {
				convertResult = Math.round(5 / 4 * fromValue + 273);
			}
			break;

		default:
			convertResult = 0;
	}
	result.value = convertResult;
	convertResult = 0;
}