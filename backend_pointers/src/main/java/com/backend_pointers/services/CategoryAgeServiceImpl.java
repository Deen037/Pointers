package com.backend_pointers.services;

import com.backend_pointers.models.category.CategoryAge;
import com.backend_pointers.repositories.CategoryAgeRepo;
import com.backend_pointers.services.interfaces.CategoryAgeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryAgeServiceImpl implements CategoryAgeService {

    private final CategoryAgeRepo categoryAgeRepo;


    @Override
    public List<CategoryAge> getAll() {
        return categoryAgeRepo.findAll();
    }

    @Override
    public void save(CategoryAge categoryAge) {
        categoryAgeRepo.save(categoryAge);
    }
}
