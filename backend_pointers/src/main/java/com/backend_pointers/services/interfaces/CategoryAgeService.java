package com.backend_pointers.services.interfaces;

import com.backend_pointers.models.category.CategoryAge;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryAgeService {

    List<CategoryAge> getAll();

    void save(CategoryAge categoryAge);
}
