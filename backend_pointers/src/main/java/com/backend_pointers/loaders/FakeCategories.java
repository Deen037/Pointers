package com.backend_pointers.loaders;

import com.backend_pointers.models.Category;
import com.backend_pointers.services.interfaces.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class FakeCategories implements CommandLineRunner {

    private final CategoryService categoryService;

    public FakeCategories(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @Override
    public void run(String... args) throws Exception {
        if(categoryService.getAll().isEmpty()) {
            fakeCategories();
        }
    }

    public void fakeCategories() {
        Category category1 = new Category();
        category1.setStyle("Breaking");
        category1.setType("Crew vs Crew");
        category1.setAge("All Ages");

        categoryService.save(category1);

        Category category2 = new Category();
        category2.setStyle("Hip-Hop");
        category2.setType("2 vs 2");
        category2.setAge("Juniors");

        categoryService.save(category2);

        Category category3 = new Category();
        category3.setStyle("Popping");
        category3.setType("1 vs 1");
        category3.setAge("Adults");

        categoryService.save(category3);
    }
}
