package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.News;

@Repository

public interface NewsRepository extends CrudRepository < News, Integer>{

}
