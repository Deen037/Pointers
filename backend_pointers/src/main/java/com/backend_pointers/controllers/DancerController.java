package com.backend_pointers.controllers;
import com.backend_pointers.models.Dancer;
import com.backend_pointers.models.DancerDTO;
import com.backend_pointers.services.interfaces.DancerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/dancers")
@CrossOrigin("*")
public class DancerController{

    private final DancerService dancerService;
    private final PasswordEncoder encoder;

    @Autowired
    private DancerController(DancerService dancerService, PasswordEncoder encoder) {
        this.dancerService = dancerService;
        this.encoder = encoder;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getDancers() {
        return ResponseEntity.ok(dancerService.getAll());
    }

    @PostMapping("/register")
    public ResponseEntity<?> saveDancer(@RequestBody Dancer dancer) {
        if (dancerService.findByEmail(dancer.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        dancerService.save(dancer);
        return ResponseEntity.ok("You have been registered");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginDancer(@RequestBody Dancer dancer){
        Optional<Dancer> found = dancerService.findByEmail(dancer.getEmail());
        Map<String, String> response = new HashMap<>();
        response.put("message", "Dancer not found");

        if(found.isEmpty()){
            return ResponseEntity.badRequest().body(response);
        }
        if (!encoder.matches(dancer.getPassword(),found.get().getPassword())) {
            return ResponseEntity.badRequest().body("Wrong password");
        }
        DancerDTO dancerDTO = new DancerDTO(found.get());
        return ResponseEntity.ok(dancerDTO);
    }

    @PatchMapping("/update/{email}")
    public ResponseEntity<?> updateDancer(@PathVariable String email, @RequestBody Map<String, Object> updates){
        Optional<Dancer> isFound = dancerService.findByEmail(email);

        if(isFound.isEmpty()){
            return ResponseEntity.badRequest().body("Dancer not found");
        }
        Dancer foundDancer = isFound.get();
        foundDancer = dancerService.update(foundDancer, updates);
        return ResponseEntity.ok(foundDancer);
    }

}
