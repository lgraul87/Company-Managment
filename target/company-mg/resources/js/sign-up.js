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
	validateStreetNumber(); validateFloorNumber(); validateDoorLetterNumber();
	validatePoblation(); validateCity(); validateBankAccount(); validatePhone();
	validateEmail(); validateCompanyName(); validateBusinessType();

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
		nameBoolean = false;
	} else {
		nameBoolean = true;
	}
}
function reportName() {
	if (inputSize > document.getElementById('Form:name-input').value.length) {
		document.getElementById('Form:name-input').style.borderColor = "red";
		document.getElementById('Form:labelName').style.color = "red";
		document.getElementById('Form:labelName').innerHTML = "Name (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:name-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelName').style.color = "black";
		document.getElementById('Form:labelName').innerHTML = "Name"
	}
}
function validateSurname() {
	if (inputSize > document.getElementById('Form:surname-input').value.length) {
		surnameBoolean = false;
	} else {
		surnameBoolean = true;
	}
}
function reportSurname() {
	if (inputSize > document.getElementById('Form:surname-input').value.length) {
		document.getElementById('Form:surname-input').style.borderColor = "red";
		document.getElementById('Form:labelSurname').style.color = "red";
		document.getElementById('Form:labelSurname').innerHTML = "Surname (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:surname-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelSurname').style.color = "black";
		document.getElementById('Form:labelSurname').innerHTML = "Surname"
	}
}
function validateSecondSurname() {
	if (inputSize > document.getElementById('Form:second-surname-input').value.length) {
		secondSurnameBoolean = false;
	} else {
		secondSurnameBoolean = true;
	}
}
function reportSecondSurname() {
	if (inputSize > document.getElementById('Form:second-surname-input').value.length) {
		document.getElementById('Form:second-surname-input').style.borderColor = "red";
		document.getElementById('Form:labelSecondSurname').style.color = "red";
		document.getElementById('Form:labelSecondSurname').innerHTML = "Second surname (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:second-surname-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelSecondSurname').style.color = "black";
		document.getElementById('Form:labelSecondSurname').innerHTML = "Second surname"
	}
}
function validateStreet() {
	if (inputSize > document.getElementById('Form:street-input').value.length) {
		streetBoolean = false;
	} else {
		streetBoolean = true;
	}
}
function reportStreet() {
	if (inputSize > document.getElementById('Form:street-input').value.length) {
		document.getElementById('Form:street-input').style.borderColor = "red";
		document.getElementById('Form:labelStreet').style.color = "red";
		document.getElementById('Form:labelStreet').innerHTML = "Street (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:street-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelStreet').style.color = "black";
		document.getElementById('Form:labelStreet').innerHTML = "Street"
	}
}
function validateStreetNumber() {
	if (inputSize > document.getElementById('Form:street-number-input').value.length) {
		streetNumberBoolean = false;
	} else {
		streetNumberBoolean = true;
	}
}
function reportStreetNumber() {
	if (inputSize > document.getElementById('Form:street-number-input').value.length) {
		document.getElementById('Form:street-number-input').style.borderColor = "red";
		document.getElementById('Form:labelStreetNumber').style.color = "red";
		document.getElementById('Form:labelStreetNumber').innerHTML = "Street number (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:street-number-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelStreetNumber').style.color = "black";
		document.getElementById('Form:labelStreetNumber').innerHTML = "Street number"
	}
}
function validateFloorNumber() {
	if (inputSize > document.getElementById('Form:floor-number-input').value.length) {
		floorNumberBoolean = false;
	} else {
		floorNumberBoolean = true;
	}
}
function reportFloorNumber() {
	if (inputSize > document.getElementById('Form:floor-number-input').value.length) {
		document.getElementById('Form:floor-number-input').style.borderColor = "red";
		document.getElementById('Form:labelFloorNumber').style.color = "red";
		document.getElementById('Form:labelFloorNumber').innerHTML = "Floor number (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:floor-number-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelFloorNumber').style.color = "black";
		document.getElementById('Form:labelFloorNumber').innerHTML = "Floor number"
	}
}
function validateDoorLetterNumber() {
	if (inputSize > document.getElementById('Form:door-letter-number-input').value.length) {
		doorNumberLetterBoolean = false;
	} else {
		doorNumberLetterBoolean = true;
	}
}
function reportDoorLetterNumber() {
	if (inputSize > document.getElementById('Form:door-letter-number-input').value.length) {
		document.getElementById('Form:door-letter-number-input').style.borderColor = "red";
		document.getElementById('Form:labelDoorLetterNumber').style.color = "red";
		document.getElementById('Form:labelDoorLetterNumber').innerHTML = "Door number or letter (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:door-letter-number-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelDoorLetterNumber').style.color = "black";
		document.getElementById('Form:labelDoorLetterNumber').innerHTML = "Door number or letter"
	}
}
function validatePoblation() {
	if (inputSize > document.getElementById('Form:population-input').value.length) {
		populationBoolean = false;
	} else {
		populationBoolean = true;
	}
}
function reportPoblation() {
	if (inputSize > document.getElementById('Form:population-input').value.length) {
		document.getElementById('Form:population-input').style.borderColor = "red";
		document.getElementById('Form:labelPopulation').style.color = "red";
		document.getElementById('Form:labelPopulation').innerHTML = "Population (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:population-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelPopulation').style.color = "black";
		document.getElementById('Form:labelPopulation').innerHTML = "Population"
	}
}
function validateCity() {
	if (inputSize > document.getElementById('Form:city-input').value.length) {
		cityBoolean = false;
	} else {
		cityBoolean = true;
	}
}
function reportCity() {
	if (inputSize > document.getElementById('Form:city-input').value.length) {
		document.getElementById('Form:city-input').style.borderColor = "red";
		document.getElementById('Form:labelCity').style.color = "red";
		document.getElementById('Form:labelCity').innerHTML = "City (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:city-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelCity').style.color = "black";
		document.getElementById('Form:labelCity').innerHTML = "City"
	}
}
function validateBankAccount() {
	if (inputSize > document.getElementById('Form:bank-account-input').value.length) {
		bankAccountBoolean = false;
	} else {
		bankAccountBoolean = true;
	}
}
function reportBankAccount() {
	if (inputSize > document.getElementById('Form:bank-account-input').value.length) {
		document.getElementById('Form:bank-account-input').style.borderColor = "red";
		document.getElementById('Form:labelBankAccount').style.color = "red";
		document.getElementById('Form:labelBankAccount').innerHTML = "Bank account (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:bank-account-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelBankAccount').style.color = "black";
		document.getElementById('Form:labelBankAccount').innerHTML = "Bank account"
	}
}
function validatePhone() {
	if (inputSize > document.getElementById('Form:phone-input').value.length) {
		phoneBoolean = false;
	} else {
		phoneBoolean = true;
	}
}
function reportPhone() {
	if (inputSize > document.getElementById('Form:phone-input').value.length) {
		document.getElementById('Form:phone-input').style.borderColor = "red";
		document.getElementById('Form:labelPhone').style.color = "red";
		document.getElementById('Form:labelPhone').innerHTML = "Phone (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:phone-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelPhone').style.color = "black";
		document.getElementById('Form:labelPhone').innerHTML = "Phone"
	}
}
function validateEmail() {
	if (inputSize > document.getElementById('Form:email-input').value.length) {
		emailBoolean = false;
	} else {
		emailBoolean = true;
	}
}
function reportEmail() {
	if (inputSize > document.getElementById('Form:email-input').value.length) {
		document.getElementById('Form:email-input').style.borderColor = "red";
		document.getElementById('Form:labelEmail').style.color = "red";
		document.getElementById('Form:labelEmail').innerHTML = "E-mail (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:email-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelEmail').style.color = "black";
		document.getElementById('Form:labelEmail').innerHTML = "E-mail"
	}
}
function validateCompanyName() {
	if (inputSize > document.getElementById('Form:company-name-input').value.length) {
		companyNameBoolean = false;
	} else {
		companyNameBoolean = true;
	}
}
function reportCompanyName() {
	if (inputSize > document.getElementById('Form:company-name-input').value.length) {
		document.getElementById('Form:company-name-input').style.borderColor = "red";
		document.getElementById('Form:labelCompanyName').style.color = "red";
		document.getElementById('Form:labelCompanyName').innerHTML = "Company name (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:company-name-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelCompanyName').style.color = "black";
		document.getElementById('Form:labelCompanyName').innerHTML = "Company name"
	}
}
function validateBusinessType() {
	if (inputSize > document.getElementById('Form:business-type-input').value.length) {
		businessTypeBoolean = false;
	} else {
		businessTypeBoolean = true;
	}
}
function reportBusinessType() {
	if (inputSize > document.getElementById('Form:business-type-input').value.length) {
		document.getElementById('Form:business-type-input').style.borderColor = "red";
		document.getElementById('Form:labelBusinessType').style.color = "red";
		document.getElementById('Form:labelBusinessType').innerHTML = "Business type (min " + inputSize + " letters) *"
	} else {
		document.getElementById('Form:business-type-input').style.borderColor = "#9FE1F8";
		document.getElementById('Form:labelBusinessType').style.color = "black";
		document.getElementById('Form:labelBusinessType').innerHTML = "Business type"
	}
}
