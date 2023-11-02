package com.backend_pointers.loaders;

import com.backend_pointers.models.category.CategoryAge;
import com.backend_pointers.services.interfaces.CategoryAgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CategoryAgeLoader implements CommandLineRunner {

    private final CategoryAgeService categoryAgeService;

    @Autowired
    public CategoryAgeLoader(CategoryAgeService categoryAgeService) {
        this.categoryAgeService = categoryAgeService;
    }

    @Override
    public void run(String... args) throws Exception {
        if(categoryAgeService.getAll().size() == 0) {
            loadInitialCategoryAges();
        }
    }

    private void loadInitialCategoryAges() {
        String[] ages = {
                "Kids (12 & Under)",
                "Teens (13-16)",
                "Adults (17-30)",
                "Best Age (31 & Up)",
                "All Ages",
        };

        for(String age : ages) {
            CategoryAge categoryAge = new CategoryAge();
            categoryAge.setName(age);
            categoryAgeService.save(categoryAge);
        }
    }
}
