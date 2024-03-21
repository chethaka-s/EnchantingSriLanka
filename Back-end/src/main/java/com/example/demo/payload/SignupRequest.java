package com.example.demo.payload;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.Set;

public class SignupRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;
    @NotBlank
    @Size(max=20)
    private  String firstName;


    @NotBlank
    @Size(max=20)
    private  String lastName;

    @NotBlank
    @Size(max=20)
    private  String country;

    @NotBlank
    @Size(max=20)
    private  int contactNumber;

    @NotBlank
    private Date dateOfBirth;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    private Set<String> roles;


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(int contactNumber) {
        this.contactNumber = contactNumber;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    public SignupRequest(String username, String firstName, String lastName, String country, int contactNumber, Date dateOfBirth, String email, String password, Set<String> roles) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.contactNumber = contactNumber;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}

