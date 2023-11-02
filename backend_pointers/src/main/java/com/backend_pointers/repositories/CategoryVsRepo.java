package com.backend_pointers.repositories;

import com.backend_pointers.models.category.CategoryVs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryVsRepo extends JpaRepository<CategoryVs, Long> {
}
