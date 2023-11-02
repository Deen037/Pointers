package com.backend_pointers.loaders;

import com.backend_pointers.models.category.CategoryVs;
import com.backend_pointers.services.interfaces.CategoryVsService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CategoryVsLoader implements CommandLineRunner {

    private final CategoryVsService categoryVsService;

    public CategoryVsLoader(CategoryVsService categoryVsService) {
        this.categoryVsService = categoryVsService;
    }

    @Override
    public void run(String... args) throws Exception {
        if(categoryVsService.getAll().size() == 0) {
            loadInitialCategoryVs();
        }
    }

    private void loadInitialCategoryVs() {
        String[] vs = {
                "1v1",
                "2v2",
                "3v3",
                "4v4",
                "5v5",
                "Crew vs Crew",
        };

        for(String v : vs) {
            CategoryVs categoryVs = new CategoryVs();
            categoryVs.setName(v);
            categoryVsService.save(categoryVs);
        }
    }
}
