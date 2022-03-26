package com.company;

import java.io.Serializable;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean(name = "accountBean")
@SessionScoped
public class AccountBean implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String name;
	private String email;
	private String surname;
	private String secondSurname;
	private String street;
	private String streetNumber;
	private String floorNumber;
	private String doorLetterNumber;
	private String population;
	private String city;
	private String bankAccount;
	private String phone;
	private String companyName;
	private String businessType;

	public void addNewAccount() {
		if (this.name != null && this.email != null && this.surname != null && this.secondSurname != null
				&& this.street != null && this.streetNumber != null && this.floorNumber != null
				&& this.doorLetterNumber != null && this.population != null && this.city != null
				&& this.bankAccount != null && this.phone != null && companyName != null && this.businessType != null) {

			// AQUI METEMOS LOS VALORES EN LA BBDD
			this.name = null;
			this.email = null;
			this.surname = null;
			this.secondSurname = null;
			this.street = null;
			this.streetNumber = null;
			this.floorNumber = null;
			this.doorLetterNumber = null;
			this.population = null;
			this.city = null;
			this.bankAccount = null;
			this.phone = null;
			this.companyName = null;
			this.businessType = null;

			// AQUI ENVIAMOS UN CORREO DE CONFIRMACION

		}
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getSecondSurname() {
		return secondSurname;
	}

	public void setSecondSurname(String secondSurname) {
		this.secondSurname = secondSurname;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}

	public String getFloorNumber() {
		return floorNumber;
	}

	public void setFloorNumber(String floorNumber) {
		this.floorNumber = floorNumber;
	}

	public String getDoorLetterNumber() {
		return doorLetterNumber;
	}

	public void setDoorLetterNumber(String doorLetterNumber) {
		this.doorLetterNumber = doorLetterNumber;
	}

	public String getPopulation() {
		return population;
	}

	public void setPopulation(String population) {
		this.population = population;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getBankAccount() {
		return bankAccount;
	}

	public void setBankAccount(String bankAccount) {
		this.bankAccount = bankAccount;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getBusinessType() {
		return businessType;
	}

	public void setBusinessType(String businessType) {
		this.businessType = businessType;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
