package com.backend_pointers.controllers;

import com.backend_pointers.models.Crew;
import com.backend_pointers.services.interfaces.CrewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class CrewController {

    private final CrewService crewService;

    @GetMapping("/crews")
    private ResponseEntity<?> getCrews(){
        return ResponseEntity.ok(crewService.getAll());
    }

    @PostMapping("/crews")
    private ResponseEntity<?> saveCrew(@RequestBody Crew crew){
        crewService.save(crew);
        Map<String, String> response = new HashMap<>();
        response.put("message", "saved");
        return ResponseEntity.ok(response);
    }
}
