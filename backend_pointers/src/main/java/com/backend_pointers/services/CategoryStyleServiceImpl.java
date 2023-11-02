package com.backend_pointers.services;

import com.backend_pointers.models.category.CategoryStyle;
import com.backend_pointers.repositories.CategoryStyleRepo;
import com.backend_pointers.services.interfaces.CategoryStyleService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryStyleServiceImpl implements CategoryStyleService {

        private final CategoryStyleRepo categoryStyleRepo;

        @Override
        public List<CategoryStyle> getAll() {
            return categoryStyleRepo.findAll();
        }

        @Override
        public void save(CategoryStyle categoryStyle) {
            categoryStyleRepo.save(categoryStyle);
        }
}
