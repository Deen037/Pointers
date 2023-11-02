package com.backend_pointers.loaders;

import com.backend_pointers.models.Crew;
import com.backend_pointers.services.interfaces.CrewService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class FakeCrews implements CommandLineRunner {

    private final CrewService crewService;

    public FakeCrews(CrewService crewService) {
        this.crewService = crewService;
    }

    @Override
    public void run(String... args) throws Exception {
        if(crewService.getAll().isEmpty()) {
            fakeCrews();
        }
    }

    private void fakeCrews() {
        Crew crew1 = createCrew("Wanted", "Paris", "France");
        crewService.save(crew1);

        Crew crew2 = createCrew("Predatorz", "Moscow", "Russia");
        crewService.save(crew2);

        Crew crew3 = createCrew("The Ruggeds", "Eindhoven", "Netherlands");
        crewService.save(crew3);

        Crew crew4 = createCrew("The Floorriorz", "Paris", "France");
        crewService.save(crew4);

        Crew crew5 = createCrew("BDS academy", "Prague", "Czech Republic");
        crewService.save(crew5);

    }
    public Crew createCrew (String name, String city, String country) {
        Crew crew = new Crew();
        crew.setName(name);
        crew.setCity(city);
        crew.setCountry(country);
        return crew;
    }
}
