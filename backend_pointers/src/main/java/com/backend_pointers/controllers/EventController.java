package com.backend_pointers.controllers;

import com.backend_pointers.models.Event;
import com.backend_pointers.services.interfaces.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;

   @GetMapping("/events")
    public ResponseEntity<?> getAll(){
            return ResponseEntity.ok(eventService.getAll());
        }
    @PostMapping("/events")
    public ResponseEntity<?> save(@RequestBody Event event){
        eventService.save(event);
        return ResponseEntity.ok("saved more");
    }
}
