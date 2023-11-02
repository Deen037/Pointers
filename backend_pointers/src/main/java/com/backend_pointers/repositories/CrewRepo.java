package com.backend_pointers.repositories;

import com.backend_pointers.models.Crew;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrewRepo extends JpaRepository<Crew, Long> {

}
