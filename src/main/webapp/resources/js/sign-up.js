var inputSize = 3;
var nameBoolean = false;
var surnameBoolean = false;
var secondSurnameBoolean = false;
var streetBoolean = false;
var streetNumberBoolean = false;
var floorNumberBoolean = false;
var doorNumberLetterBoolean = false;
var populationBoolean = false;
var cityBoolean = false;
var bankAccountBoolean = false;
var phoneBoolean = false;
var emailBoolean = false;
var companyNameBoolean = false;
var businessTypeBoolean = false;

function send() {

	validateName(); validateSurname(); validateSecondSurname(); validateStreet();
	validateStreetNumber(); validateFloorNumber(); validateDoorLetterNumber(); validatePoblation(); validateCity();
	validateBankAccount(); validatePhone(); validateEmail(); validateCompanyName(); validateBusinessType();

	if (nameBoolean && surnameBoolean && secondSurnameBoolean && streetBoolean && floorNumberBoolean
		&& doorNumberLetterBoolean && populationBoolean && cityBoolean && bankAccountBoolean && phoneBoolean
		&& emailBoolean && companyNameBoolean && businessTypeBoolean) {
		document.getElementById('Form:submit-button').disabled = false;
		document.getElementById('Form:submit-button').classList.remove("ui-state-disabled");
	} else {
		document.getElementById('Form:submit-button').disabled = true
		document.getElementById('Form:submit-button').classList.add("ui-state-disabled");
	}
}
function validateName() {
	if (inputSize > document.getElementById('Form:name-input').value.length) {
		document.getElementById('Form:name-input').style.borderColor = "red";
		document.getElementById('Form:labelName').style.color = "red";
		document.getElementById('Form:labelName').innerHTML = "Name (min " + inputSize + " letters) *"
		nameBoolean = false;
	} else {
		document.getElementById('Form:name-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelName').style.color = "black";
		document.getElementById('Form:labelName').innerHTML = "Name"
		nameBoolean = true;
	}
}
function validateSurname() {
	if (inputSize > document.getElementById('Form:surname-input').value.length) {
		document.getElementById('Form:surname-input').style.borderColor = "red";
		document.getElementById('Form:labelSurname').style.color = "red";
		document.getElementById('Form:labelSurname').innerHTML = "Surname (min " + inputSize + " letters) *"
		surnameBoolean = false;
	} else {
		document.getElementById('Form:surname-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelSurname').style.color = "black";
		document.getElementById('Form:labelSurname').innerHTML = "Surname"
		surnameBoolean = true;
	}
}
function validateSecondSurname() {
	if (inputSize > document.getElementById('Form:second-surname-input').value.length) {
		document.getElementById('Form:second-surname-input').style.borderColor = "red";
		document.getElementById('Form:labelSecondSurname').style.color = "red";
		document.getElementById('Form:labelSecondSurname').innerHTML = "Second surname (min " + inputSize + " letters) *"
		secondSurnameBoolean = false;
	} else {
		document.getElementById('Form:second-surname-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelSecondSurname').style.color = "black";
		document.getElementById('Form:labelSecondSurname').innerHTML = "Second surname"
		secondSurnameBoolean = true;
	}
}
function validateStreet() {
	if (inputSize > document.getElementById('Form:street-input').value.length) {
		document.getElementById('Form:street-input').style.borderColor = "red";
		document.getElementById('Form:labelStreet').style.color = "red";
		document.getElementById('Form:labelStreet').innerHTML = "Street (min " + inputSize + " letters) *"
		streetBoolean = false;
	} else {
		document.getElementById('Form:street-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelStreet').style.color = "black";
		document.getElementById('Form:labelStreet').innerHTML = "Street"
		streetBoolean = true;
	}
}
function validateStreetNumber() {
	if (inputSize > document.getElementById('Form:street-number-input').value.length) {
		document.getElementById('Form:street-number-input').style.borderColor = "red";
		document.getElementById('Form:labelStreetNumber').style.color = "red";
		document.getElementById('Form:labelStreetNumber').innerHTML = "Street number (min " + inputSize + " letters) *"
		streetNumberBoolean = false;
	} else {
		document.getElementById('Form:street-number-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelStreetNumber').style.color = "black";
		document.getElementById('Form:labelStreetNumber').innerHTML = "Street number"
		streetNumberBoolean = true;
	}
}
function validateFloorNumber() {
	if (inputSize > document.getElementById('Form:floor-number-input').value.length) {
		document.getElementById('Form:floor-number-input').style.borderColor = "red";
		document.getElementById('Form:labelFloorNumber').style.color = "red";
		document.getElementById('Form:labelFloorNumber').innerHTML = "Floor number (min " + inputSize + " letters) *"
		floorNumberBoolean = false;
	} else {
		document.getElementById('Form:floor-number-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelFloorNumber').style.color = "black";
		document.getElementById('Form:labelFloorNumber').innerHTML = "Floor number"
		floorNumberBoolean = true;
	}

}
function validateDoorLetterNumber() {
	if (inputSize > document.getElementById('Form:door-letter-number-input').value.length) {
		document.getElementById('Form:door-letter-number-input').style.borderColor = "red";
		document.getElementById('Form:labelDoorLetterNumber').style.color = "red";
		document.getElementById('Form:labelDoorLetterNumber').innerHTML = "Door number or letter (min " + inputSize + " letters) *"
		doorNumberLetterBoolean = false;
	} else {
		document.getElementById('Form:door-letter-number-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelDoorLetterNumber').style.color = "black";
		document.getElementById('Form:labelDoorLetterNumber').innerHTML = "Door number or letter"
		doorNumberLetterBoolean = true;
	}

}
function validatePoblation() {
	if (inputSize > document.getElementById('Form:population-input').value.length) {
		document.getElementById('Form:population-input').style.borderColor = "red";
		document.getElementById('Form:labelPopulation').style.color = "red";
		document.getElementById('Form:labelPopulation').innerHTML = "Population (min " + inputSize + " letters) *"
		populationBoolean = false;
	} else {
		document.getElementById('Form:population-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelPopulation').style.color = "black";
		document.getElementById('Form:labelPopulation').innerHTML = "Population"
		populationBoolean = true;
	}

}
function validateCity() {
	if (inputSize > document.getElementById('Form:city-input').value.length) {
		document.getElementById('Form:city-input').style.borderColor = "red";
		document.getElementById('Form:labelCity').style.color = "red";
		document.getElementById('Form:labelCity').innerHTML = "City (min " + inputSize + " letters) *"
		cityBoolean = false;
	} else {
		document.getElementById('Form:city-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelCity').style.color = "black";
		document.getElementById('Form:labelCity').innerHTML = "City"
		cityBoolean = true;
	}

}
function validateBankAccount() {
	if (inputSize > document.getElementById('Form:bank-account-input').value.length) {
		document.getElementById('Form:bank-account-input').style.borderColor = "red";
		document.getElementById('Form:labelBankAccount').style.color = "red";
		document.getElementById('Form:labelBankAccount').innerHTML = "Bank account (min " + inputSize + " letters) *"
		bankAccountBoolean = false;
	} else {
		document.getElementById('Form:bank-account-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelBankAccount').style.color = "black";
		document.getElementById('Form:labelBankAccount').innerHTML = "Bank account"
		bankAccountBoolean = true;
	}

}
function validatePhone() {
	if (inputSize > document.getElementById('Form:phone-input').value.length) {
		document.getElementById('Form:phone-input').style.borderColor = "red";
		document.getElementById('Form:labelPhone').style.color = "red";
		document.getElementById('Form:labelPhone').innerHTML = "Phone (min " + inputSize + " letters) *"
		phoneBoolean = false;
	} else {
		document.getElementById('Form:phone-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelPhone').style.color = "black";
		document.getElementById('Form:labelPhone').innerHTML = "Phone"
		phoneBoolean = true;
	}

}
function validateEmail() {
	if (inputSize > document.getElementById('Form:email-input').value.length) {
		document.getElementById('Form:email-input').style.borderColor = "red";
		document.getElementById('Form:labelEmail').style.color = "red";
		document.getElementById('Form:labelEmail').innerHTML = "E-mail (min " + inputSize + " letters) *"
		emailBoolean = false;
	} else {
		document.getElementById('Form:email-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelEmail').style.color = "black";
		document.getElementById('Form:labelEmail').innerHTML = "E-mail"
		emailBoolean = true;
	}

}
function validateCompanyName() {
	if (inputSize > document.getElementById('Form:company-name-input').value.length) {
		document.getElementById('Form:company-name-input').style.borderColor = "red";
		document.getElementById('Form:labelCompanyName').style.color = "red";
		document.getElementById('Form:labelCompanyName').innerHTML = "Company name (min " + inputSize + " letters) *"
		companyNameBoolean = false;
	} else {
		document.getElementById('Form:company-name-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelCompanyName').style.color = "black";
		document.getElementById('Form:labelCompanyName').innerHTML = "Company name"
		companyNameBoolean = true;
	}

}
function validateBusinessType() {
	if (inputSize > document.getElementById('Form:business-type-input').value.length) {
		document.getElementById('Form:business-type-input').style.borderColor = "red";
		document.getElementById('Form:labelBusinessType').style.color = "red";
		document.getElementById('Form:labelBusinessType').innerHTML = "Business type (min " + inputSize + " letters) *"
		businessTypeBoolean = false;
	} else {
		document.getElementById('Form:business-type-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelBusinessType').style.color = "black";
		document.getElementById('Form:labelBusinessType').innerHTML = "Business type"
		businessTypeBoolean = true;
	}

}