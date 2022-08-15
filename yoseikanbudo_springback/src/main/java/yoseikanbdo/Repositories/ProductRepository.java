package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Product;

@Repository
public interface ProductRepository extends CrudRepository <Product , Integer> {

}
