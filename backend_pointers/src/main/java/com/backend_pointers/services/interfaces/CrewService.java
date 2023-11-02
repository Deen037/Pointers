package com.backend_pointers.services.interfaces;

import com.backend_pointers.models.Crew;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CrewService {
    List<Crew> getAll();

    void save(Crew crew);
}

