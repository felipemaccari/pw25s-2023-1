package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.model.Category;
import br.edu.utfpr.pb.pw25s.server.service.CategoryService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("categories")
public class CategoryController {

    @Autowired
    private static CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping
    public ResponseEntity<Category> createCategory(@Valid @RequestBody Category category) {
        categoryService.create(category);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().buildAndExpand(category.getId()).toUri();

        return ResponseEntity.created(location).body(category);
    }

    @PutMapping("{id}")
    public ResponseEntity<Category> updateCategory(@Valid @RequestBody Category category, @PathVariable Long id) {
        categoryService.update(category);

        return ResponseEntity.ok(category);
    }

    @GetMapping
    public ResponseEntity<List<Category>> findAll(){
        List<Category> categories = categoryService.findAll();
        return ResponseEntity.ok(categories);
    }

    @GetMapping("{id}")
    public ResponseEntity<Category> findOne(@PathVariable(name = "id") Long id){
        Category category = categoryService.findOne(id);
        return ResponseEntity.ok(category);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(name = "id") Long id){
        categoryService.delete(id);
    }
}
