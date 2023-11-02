package com.backend_pointers.services.interfaces;

import com.backend_pointers.models.category.CategoryVs;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryVsService {

    List<CategoryVs> getAll();

    void save(CategoryVs categoryVs);

}
