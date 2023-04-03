package br.edu.utfpr.pb.pw25s.server.service.interfaces;

import br.edu.utfpr.pb.pw25s.server.model.Category;

import java.util.List;

public interface CategoryServiceInterface {

    Category create(Category category);

    Category update(Category category);

    List<Category> findAll();

    Category findOne(Long id);

    void delete(Long id);
}
