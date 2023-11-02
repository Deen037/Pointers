package com.backend_pointers.models;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String authority;

    public Role(String authority) {
        this.authority = authority;
    }

    public static List<Role> getRoles(){
        return List.of(
               new Role("DANCER"),
                new Role("JUDGE"),
                new Role("ORGANIZER"),
               new Role("ADMIN")
        );
    }
}
