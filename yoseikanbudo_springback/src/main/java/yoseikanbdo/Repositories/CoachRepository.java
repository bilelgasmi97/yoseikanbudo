package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Coach;

@Repository

public interface CoachRepository extends CrudRepository <Coach , Integer>{

}
