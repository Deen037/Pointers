package com.backend_pointers.controllers;

import com.backend_pointers.models.Category;
import com.backend_pointers.models.category.CategoryAge;
import com.backend_pointers.models.category.CategoryStyle;
import com.backend_pointers.models.category.CategoryVs;
import com.backend_pointers.services.interfaces.CategoryAgeService;
import com.backend_pointers.services.interfaces.CategoryService;
import com.backend_pointers.services.interfaces.CategoryStyleService;
import com.backend_pointers.services.interfaces.CategoryVsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;
    private final CategoryVsService categoryVsService;
    private final CategoryStyleService categoryStyleService;
    private final CategoryAgeService categoryAgeService;

    @GetMapping("/categories")
    public ResponseEntity<?> getAllCategories() {
        return ResponseEntity.ok(categoryService.getAll());
    }

    @GetMapping("/categories/vs")
    public ResponseEntity<?> getAllCategoriesVs() {
        return ResponseEntity.ok(categoryVsService.getAll());
    }

    @GetMapping("/categories/styles")
    public ResponseEntity<?> getAllCategoriesStyle() {
        return ResponseEntity.ok(categoryStyleService.getAll());
    }

    @GetMapping("/categories/ages")
    public ResponseEntity<?> getAllCategoriesAge() {
        return ResponseEntity.ok(categoryAgeService.getAll());
    }

    @PostMapping("/categories")
    public ResponseEntity<?> saveCategory(@RequestBody Category category) {
        categoryService.save(category);
        return ResponseEntity.ok("dun");
    }

    @PostMapping("/categories/vs")
    public ResponseEntity<?> saveCategoryVs(@RequestBody CategoryVs categoryVs) {
        categoryVsService.save(categoryVs);
        return ResponseEntity.ok("dun");
    }

    @PostMapping("/categories/styles")
    public ResponseEntity<?> saveCategoryStyle(@RequestBody CategoryStyle categoryStyle) {
        categoryStyleService.save(categoryStyle);
        return ResponseEntity.ok("dun");
    }

    @PostMapping("/categories/ages")
    public ResponseEntity<?> saveCategoryAge(@RequestBody CategoryAge categoryAge) {
        categoryAgeService.save(categoryAge);
        return ResponseEntity.ok("dun");
    }

}
