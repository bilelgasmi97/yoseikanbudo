package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Team;


@Repository
public interface TeamRepository extends CrudRepository <Team , Integer>{

}
