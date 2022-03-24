
function validateName() {
	if (3 > document.getElementById('Form:name-input').value.length) {
		document.getElementById('Form:name-input').style.borderColor = "red";
		document.getElementById('Form:labelName').style.color = "red";
		document.getElementById('Form:labelName').innerHTML = "Letters (min 3 or more)"
	} else {
		document.getElementById('Form:name-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelName').style.color = "black";
		document.getElementById('Form:labelName').innerHTML = "Name"
	}
}

function validateSurname() {
	if (3 > document.getElementById('Form:surname-input').value.length) {
		document.getElementById('Form:surname-input').style.borderColor = "red";
		document.getElementById('Form:labelSurname').style.color = "red";
		document.getElementById('Form:labelSurname').innerHTML = "Letters (min 3 or more)"
	} else {
		document.getElementById('Form:surname-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelSurname').style.color = "black";
		document.getElementById('Form:labelSurname').innerHTML = "Surname"
	}
}

function validateSecondSurname() {
	if (3 > document.getElementById('Form:second-surname-input').value.length) {
		document.getElementById('Form:second-surname-input').style.borderColor = "red";
		document.getElementById('Form:labelSecondSurname').style.color = "red";
		document.getElementById('Form:labelSecondSurname').innerHTML = "Letters (min 3 or more)"
	} else {
		document.getElementById('Form:second-surname-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelSecondSurname').style.color = "black";
		document.getElementById('Form:labelSecondSurname').innerHTML = "Second surname"
	}
}

function validateStreet() {
	if (3 > document.getElementById('Form:street-input').value.length) {
		document.getElementById('Form:street-input').style.borderColor = "red";
		document.getElementById('Form:labelStreet').style.color = "red";
		document.getElementById('Form:labelStreet').innerHTML = "Letters (min 3 or more)"
	} else {
		document.getElementById('Form:street-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelStreet').style.color = "black";
		document.getElementById('Form:labelStreet').innerHTML = "Street"
	}
}

function validateStreetNumber() {
	if (3 > document.getElementById('Form:street-number-input').value.length) {
		document.getElementById('Form:street-number-input').style.borderColor = "red";
		document.getElementById('Form:labelStreetNumber').style.color = "red";
		document.getElementById('Form:labelStreetNumber').innerHTML = "Letters (min 3 or more)"
	} else {
		document.getElementById('Form:street-number-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelStreetNumber').style.color = "black";
		document.getElementById('Form:labelStreetNumber').innerHTML = "Street number"
	}
}

function validateFloorNumber() {
	if (3 > document.getElementById('Form:floor-number-input').value.length) {
		document.getElementById('Form:floor-number-input').style.borderColor = "red";
		document.getElementById('Form:labelFloorNumber').style.color = "red";
		document.getElementById('Form:labelFloorNumber').innerHTML = "Letters (min 3 or more)"
	} else {
		document.getElementById('Form:floor-number-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelFloorNumber').style.color = "black";
		document.getElementById('Form:labelFloorNumber').innerHTML = "Floor number"
	}
}

function validateDoorLetterNumber() {
	if (3 > document.getElementById('Form:door-letter-number-input').value.length) {
		document.getElementById('Form:door-letter-number-input').style.borderColor = "red";
		document.getElementById('Form:labelDoorLetterNumber').style.color = "red";
		document.getElementById('Form:labelDoorLetterNumber').innerHTML = "Letters (min 3 or more)"
	} else {
		document.getElementById('Form:door-letter-number-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelDoorLetterNumber').style.color = "black";
		document.getElementById('Form:labelDoorLetterNumber').innerHTML = "Door number or letter"
	}
}