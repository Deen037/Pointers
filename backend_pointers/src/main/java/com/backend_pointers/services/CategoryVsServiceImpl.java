package com.backend_pointers.services;
import com.backend_pointers.models.category.CategoryVs;
import com.backend_pointers.repositories.CategoryVsRepo;
import com.backend_pointers.services.interfaces.CategoryVsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class CategoryVsServiceImpl implements CategoryVsService {

    private final CategoryVsRepo categoryVsRepo;

    @Override
    public List<CategoryVs> getAll() {
        return categoryVsRepo.findAll();
    }

    @Override
    public void save(CategoryVs categoryVs) {
        categoryVsRepo.save(categoryVs);
    }
}
