package com.backend_pointers.loaders;

import com.backend_pointers.models.Event;
import com.backend_pointers.services.interfaces.EventService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class FakeEvents implements CommandLineRunner {

    private final EventService eventService;

    public FakeEvents(EventService eventService) {
        this.eventService = eventService;
    }


    @Override
    public void run(String... args){
    if(eventService.getAll().size() == 0) {
        loadInitialEvents();
        }
    }

    private void loadInitialEvents() {

            Event BattleOfTheYear = new Event();
            BattleOfTheYear.setName("Battle Of The Year");
            BattleOfTheYear.setCountry("Czech Republic");
            BattleOfTheYear.setCity("Prague");
            BattleOfTheYear.setClub("O2 Arena");
            BattleOfTheYear.setStreet("Českomoravská");
            BattleOfTheYear.setStreetNumber("2345/17");
            BattleOfTheYear.setZipCode("190 00");
            BattleOfTheYear.setDate("2021-10-16");
            BattleOfTheYear.setTime("18:00");
            BattleOfTheYear.setDescription("Battle Of The Year is an international " +
                    "breakdancing competition that began in 1990. " +
                    "It has been regarded as the premier b-boying " +
                    "competition in the world and has been referred " +
                    "to as the \"World Cup of B-Boying\".");

            eventService.save(BattleOfTheYear);

        Event event1 = new Event();
        event1.setName("Another Event 1");
        event1.setCountry("Germany");
        event1.setCity("Berlin");
        event1.setClub("Club XYZ");
        event1.setStreet("Sample Street");
        event1.setStreetNumber("123");
        event1.setZipCode("12345");
        event1.setDate("2022-03-20");
        event1.setTime("19:30");
        event1.setDescription("This is another event description.");

        eventService.save(event1);

        Event event2 = new Event();
        event2.setName("Another Event 2");
        event2.setCountry("USA");
        event2.setCity("New York");
        event2.setClub("Dance Central");
        event2.setStreet("Broadway");
        event2.setStreetNumber("4567");
        event2.setZipCode("10001");
        event2.setDate("2022-05-15");
        event2.setTime("20:00");
        event2.setDescription("This is another event description for event 2.");

        eventService.save(event2);
    }
}

