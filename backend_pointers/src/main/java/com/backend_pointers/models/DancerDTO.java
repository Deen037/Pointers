package com.backend_pointers.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@Data

public class DancerDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String birthDate;
    private String username;
    private String city;
    private String country;
    private String nationality;
    private String phone;
    private String email;
    private String photo;
    private String about;
    private String facebook;
    private String instagram;
    private String youtube;
    private String twitter;
    private String tiktok;
    private String twitch;
    private String spotify;
    private String soundcloud;
    private Set<Role> roles;
    private Set<Crew> crew;
    private Set<Event> events;

    public DancerDTO(Dancer dancer) {
        this.id = dancer.getId();
        this.firstName = dancer.getFirstName();
        this.lastName = dancer.getLastName();
        this.birthDate = formatDateToISO(dancer.getBirthDate());
        this.username = dancer.getUsername();
        this.city = dancer.getCity();
        this.country = dancer.getCountry();
        this.nationality = dancer.getNationality();
        this.phone = dancer.getPhone();
        this.email = dancer.getEmail();
        this.photo = dancer.getPhoto();
        this.about = dancer.getAbout();
        this.facebook = dancer.getFacebook();
        this.instagram = dancer.getInstagram();
        this.youtube = dancer.getYoutube();
        this.twitter = dancer.getTwitter();
        this.tiktok = dancer.getTiktok();
        this.twitch = dancer.getTwitch();
        this.spotify = dancer.getSpotify();
        this.soundcloud = dancer.getSoundcloud();
        this.roles = dancer.getRoles();
        this.crew = dancer.getCrew();
        this.events = dancer.getEvents();
    }

    public static String formatDateToISO(Date date) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        return formatter.format(date);
    }
}
