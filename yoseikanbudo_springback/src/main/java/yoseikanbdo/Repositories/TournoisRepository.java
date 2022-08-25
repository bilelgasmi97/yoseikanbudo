package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Tournois;


@Repository
public interface TournoisRepository extends CrudRepository <Tournois , Integer>{

}
