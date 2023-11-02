package com.backend_pointers.services;

import com.backend_pointers.models.Crew;
import com.backend_pointers.repositories.CrewRepo;
import com.backend_pointers.services.interfaces.CrewService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@Data
@AllArgsConstructor
public class CrewServiceImpl implements CrewService {

    private final CrewRepo crewRepo;

    @Override
    public List<Crew> getAll() {
        return crewRepo.findAll();
    }

    @Override
    public void save(Crew crew) {
        crewRepo.save(crew);
    }
}
