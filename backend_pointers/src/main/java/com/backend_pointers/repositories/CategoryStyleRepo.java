package com.backend_pointers.repositories;

import com.backend_pointers.models.category.CategoryStyle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryStyleRepo extends JpaRepository<CategoryStyle, Long> {
}
