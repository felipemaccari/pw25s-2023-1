package br.edu.utfpr.pb.pw25s.server.service.interfaces;

import br.edu.utfpr.pb.pw25s.server.model.Product;

import java.util.List;

public interface ProductServiceInterface {

    Product create(Product product);

    Product update(Product product);

    List<Product> findAll();

    Product findOne(Long id);

    void delete(Long id);
}
