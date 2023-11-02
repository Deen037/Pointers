package com.backend_pointers.repositories;

import com.backend_pointers.models.Dancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DancerRepo extends JpaRepository<Dancer, Long> {

    Optional<Dancer> findByEmail(String email);
    Optional<Dancer> findByFirstName(String firstName);
    Optional<Dancer> findByUsername(String username);

}

