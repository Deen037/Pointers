package com.backend_pointers.repositories;

import com.backend_pointers.models.category.CategoryAge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryAgeRepo extends JpaRepository<CategoryAge, Long> {
}
