package com.backend_pointers.models;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Dancer{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

  //  bio
    private Long id;
    private String firstName;
    private String lastName;
    private Date birthDate;
    private String username;
    private String city;
    private String country;
    private String nationality;
    private String phone;
    @Column(unique = true)
    @Email
    private String email;
    private String password;
    private String photo;
    private String about;

    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinTable(
            name = "dancers_roles",
            joinColumns = {@JoinColumn(name = "dancer_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id")}
    )
    private Set<Role> roles;

//    social media
    private String facebook;
    private String instagram;
    private String youtube;
    private String twitter;
    private String tiktok;
    private String twitch;
    private String spotify;
    private String soundcloud;

//    crew
    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinTable(
            name = "dancers_crew",
            joinColumns = {@JoinColumn(name = "dancer_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "crew_id", referencedColumnName = "id")}
    )
    Set<Crew> crew;

//    events
    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinTable(
            name = "dancers_events",
            joinColumns = {@JoinColumn(name = "dancer_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "event_id", referencedColumnName = "id")}
    )
    Set<Event> events;

}
