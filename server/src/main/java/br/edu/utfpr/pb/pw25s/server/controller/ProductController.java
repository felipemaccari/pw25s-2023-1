package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.model.Product;
import br.edu.utfpr.pb.pw25s.server.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("products")
public class ProductController {

    @Autowired
    private static ProductService productService;

    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product){
        this.productService.create(product);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().buildAndExpand(product.getId()).toUri();

        return ResponseEntity.created(location).body(product);
    }

    @PutMapping("{id}")
    public ResponseEntity<Product> updateCategory(@Valid @RequestBody Product product, @PathVariable Long id){
        this.productService.update(product);
        return ResponseEntity.ok(product);
    }

    @GetMapping
    public ResponseEntity<List<Product>> findAll(){
        List<Product> products = this.productService.findAll();
        return ResponseEntity.ok(products);
    }

    @GetMapping("{id}")
    public ResponseEntity<Product> findOne(@PathVariable(name = "id") Long id){
        Product product = this.productService.findOne(id);
        return ResponseEntity.ok(product);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(name = "id") Long id){
        this.productService.delete(id);
    }

}
