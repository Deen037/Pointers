package com.backend_pointers.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Set;

@AllArgsConstructor
@Data

public class DancerDTO {

    private String firstName;
    private String lastName;
    private String username;
    private String country;
    private String email;
    private String photo;
    private Set<Role> roles;
    private Set<Crew> crew ;

    public DancerDTO(Dancer dancer) {
        this.firstName = dancer.getFirstName();
        this.lastName = dancer.getLastName();
        this.username = dancer.getUsername();
        this.country = dancer.getCountry();
        this.email = dancer.getEmail();
        this.roles = dancer.getRoles();
        this.crew = dancer.getCrew();
        this.photo = dancer.getPhoto();
    }

}
