package com.backend_pointers.services;
import com.backend_pointers.models.Event;
import com.backend_pointers.repositories.EventRepo;
import com.backend_pointers.services.interfaces.EventService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EventServiceImpl implements EventService {

    private final EventRepo eventRepo;
    public List<Event> getAll() {
        return eventRepo.findAll();
    }
    public void save(Event event) {
        eventRepo.save(event);
    }
}
