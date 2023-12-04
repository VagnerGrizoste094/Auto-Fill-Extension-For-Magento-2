let lastKeyIsShift = false;

document.onkeydown = complete;
document.onkeyup = () => {
	lastKeyIsShift = false;
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function complete(e) {
	if (e.shiftKey) {
		lastKeyIsShift = true;
	}
	if (lastKeyIsShift && e.keyCode == 66) {
		lastKeyIsShift = false;
		let config = browser.storage.sync.get('config')
		config.then((obj) => {
			if (obj.config.enable == '0') {
				alert("Auto complete disabled, please enable and try again.");
				return false;
			}
			let inputs = document.querySelectorAll("input, select")
			let inputsArray = Array.from(inputs)
			let filteredInputsArray = inputsArray.filter(function(input) {
				if (input.offsetWidth > 0 || input.offsetHeight > 0 && input.type != "hidden") {
					return input
				}
			});
			let email = generateRandomEmail(obj.config.customEmailDomain);
			let password = obj.config.customPassword ? obj.config.customPassword : '1234teste';
			filteredInputsArray.forEach(function(el, idx) {
				switch (true) {
					case (el.name == "firstname"):
						el.value = generateRandomName();
					break;
					case (el.name == "lastname"):
						el.value = generateRandomName();
					break;
					case (el.name == "email"):
						el.value = email;
					break;
					case (el.name == "confirm_email"):
						el.value = email;
					break;
					case (el.name == "taxvat" || el.name == "vat_id"):
						if (el.maxLength > 14) {
							el.value = generateFakeCnpj();
						} else {
							el.value = generateFakeCpf();
						}
						el.blur();
					break;
					case (el.name == "telephone"):
						el.value = generateRandomTelephone();
					break;
					case (el.name == "gender"):
						el.value = generateRandom(1)+1;
					break;
					case (el.name == "isento"):
						el.checked = true;
					break;
					case (el.name == "fax"):
						el.value = generateRandomTelephone();
					break;
					case (el.name == "password"):
						el.value = password;
					break;
					case (el.name == "password_confirmation"):
						el.value = password;
					break;
					case (el.name == "dob"):
						el.value = generateFakeDob();
					break;
					case (el.name == "postcode"):
						el.value = obj.config.customPostcode ? obj.config.customPostcode : "01010-000";
						el.focus();
						el.blur();
					break;
				}
			});
		})
	}
}