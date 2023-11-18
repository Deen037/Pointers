package com.backend_pointers.loaders;

import com.backend_pointers.models.Dancer;
import com.backend_pointers.services.interfaces.DancerService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class FakeDancers implements CommandLineRunner {

    private final DancerService dancerService;

    public FakeDancers(DancerService dancerService) {
        this.dancerService = dancerService;
    }


    @Override
    public void run(String... args){
       if(dancerService.getAll().isEmpty()) {
           fakeDancers();
        }
    }

    private void fakeDancers() {
        Dancer dancer1 = createDancer("John", "Doe",
                "b-boy Johny Cage", "Czech Republic", "xxx", "john@gmail.com");
        dancerService.save(dancer1);

        Dancer dancer2 = createDancer("Jane", "Doe",
                "b-girl Jane Cage", "Czech Republic", "xxx", "jane@gmail.com");
        dancerService.save(dancer2);

        Dancer dancer3 = createDancer("Jack", "Doe",
                "b-boy Jack Cage", "Czech Republic", "xxx", "jack@gmail.com");
        dancerService.save(dancer3);

        Dancer dancer4 = createDancer("Jill","Doe","b-girl Jill Cage",
                "Czech Republic", "xxx", "jill@gmail.com");
        dancerService.save(dancer4);

        Dancer dancer5 = createDancer("James","Doe","b-boy James Cage",
                "Czech Republic", "xxx", "james@gmail.com");
        dancerService.save(dancer5);

        Dancer BOTYJudge1 = new Dancer();
        BOTYJudge1.setFirstName("B-Boy Lilou");
        BOTYJudge1.setCountry("France");
        BOTYJudge1.setPassword("xxx");

        Dancer BOTYJudge2 = new Dancer();
        BOTYJudge2.setFirstName("B-Boy Roxrite");
        BOTYJudge2.setCountry("United States");
        BOTYJudge2.setPassword("xxx");


        Dancer BOTYJudge3 = new Dancer();
        BOTYJudge3.setFirstName("B-Girl Terra");
        BOTYJudge3.setCountry("United Kingdom");
        BOTYJudge3.setPassword("xxx");

        dancerService.save(BOTYJudge1);
        dancerService.save(BOTYJudge2);
        dancerService.save(BOTYJudge3);

        Dancer Miro = new Dancer();
        Miro.setFirstName("Miro");
        Miro.setLastName("Olšavský");
        Miro.setUsername("Miroslash");
        Miro.setCountry("Slovakia");
        Miro.setPassword("xxx");
        Miro.setEmail("miro@gmail.com");
        Miro.setBirthDate(java.sql.Date.valueOf("1978-08-28"));
        Miro.setCity("Hrabušice");
        Miro.setPhone("+421 911 123 456");
        Miro.setPhoto("https://www.breakdanceprojectutrecht.nl/wp-content/uploads/2019/01/IMG_20190105_153319-1.jpg");
        Miro.setAbout("Miro is a dancer, choreographer, teacher and promoter of breaking.");
        Miro.setFacebook("https://www.facebook.com/miro.olsavsky");
        Miro.setInstagram("https://www.instagram.com/miro_olsavsky/");
        Miro.setYoutube("https://www.youtube.com/user/miroolsavsky");
        Miro.setTwitter("https://twitter.com/miroolsavsky");
        Miro.setTiktok("https://www.tiktok.com/@miroolsavsky");
        Miro.setTwitch("https://www.twitch.tv/miroolsavsky");
        Miro.setSpotify("https://open.spotify.com/artist/5Z9Z1Y5Y4X2X0Q4Z1Z1Z1Z");
        Miro.setSoundcloud("https://soundcloud.com/miroolsavsky");
        dancerService.save(Miro);

    }

    public Dancer createDancer(String firstName, String lastName, String username, String country, String password, String email) {
        Dancer dancer = new Dancer();
        dancer.setFirstName(firstName);
        dancer.setLastName(lastName);
        dancer.setUsername(username);
        dancer.setCountry(country);
        dancer.setPassword(password);
        dancer.setEmail(email);
        return dancer;
    }

}
