package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Category;

@Repository

public interface CategoryRepository extends CrudRepository < Category	, Integer>{

}
