package com.backend_pointers.controllers;

import com.backend_pointers.models.Crew;
import com.backend_pointers.services.interfaces.CrewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CrewController {

    private final CrewService crewService;

    @GetMapping("/crews")
    private ResponseEntity<?> getCrews(){
        return ResponseEntity.ok(crewService.getAll());
    }

    @PostMapping("/crews")
    private ResponseEntity<?> saveCrew(@RequestBody Crew crew){
        crewService.save(crew);
        return ResponseEntity.ok("saved");
    }
}
