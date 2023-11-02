package com.backend_pointers.services.interfaces;

import com.backend_pointers.models.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {

    List<Category> getAll();

    void save(Category category);
}
