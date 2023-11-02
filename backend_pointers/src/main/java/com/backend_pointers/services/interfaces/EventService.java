package com.backend_pointers.services.interfaces;

import com.backend_pointers.models.Event;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EventService {

    List<Event> getAll();

    void save(Event event);
}
