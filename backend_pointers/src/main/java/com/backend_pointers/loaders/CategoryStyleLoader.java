package com.backend_pointers.loaders;

import com.backend_pointers.models.category.CategoryStyle;
import com.backend_pointers.repositories.CategoryStyleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CategoryStyleLoader implements CommandLineRunner {

    private final CategoryStyleRepo categoryStyleRepo;

    @Autowired
    public CategoryStyleLoader(CategoryStyleRepo categoryStyleRepo) {
        this.categoryStyleRepo = categoryStyleRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        if(categoryStyleRepo.count() == 0) {
            loadInitialCategoryStyles();
        }
    }

    private void loadInitialCategoryStyles() {
        // List of category styles
        String[] categoryStyles = {
                "Hip-Hop",
                "House Dance",
                "Locking",
                "Popping",
                "Experimental",
                "Breakin'",
                "Waacking",
                "Vogue",
                "Krump",
                "Litefeet",
                "All Styles",
        };

        // Save each category style to the database
        for(String categoryStyle : categoryStyles) {
            CategoryStyle categoryStyleToSave = new CategoryStyle();
            categoryStyleToSave.setName(categoryStyle);
            categoryStyleRepo.save(categoryStyleToSave);
        }
    }
}
