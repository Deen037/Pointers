package com.backend_pointers.services.interfaces;

import com.backend_pointers.models.Dancer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface DancerService {
 List<Dancer> getAll();
 void save(Dancer dancer);
    Optional<Dancer> findByEmail(String email);
    Optional<Dancer> findByFirstName(String firstName);

    Optional<Dancer> findByUsername(String username);
}
