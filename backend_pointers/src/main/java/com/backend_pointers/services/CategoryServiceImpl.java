package com.backend_pointers.services;

import com.backend_pointers.models.Category;
import com.backend_pointers.repositories.CategoryRepo;
import com.backend_pointers.services.interfaces.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepo categoryRepo;

    @Override
    public List<Category> getAll() {
        return categoryRepo.findAll();
    }

    @Override
    public void save(Category category) {
        categoryRepo.save(category);
    }
}
