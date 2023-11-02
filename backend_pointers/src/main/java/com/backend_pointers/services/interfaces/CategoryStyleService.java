package com.backend_pointers.services.interfaces;

import com.backend_pointers.models.category.CategoryStyle;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryStyleService {
    List<CategoryStyle> getAll();

    void save(CategoryStyle categoryStyle);
}
