package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Combat;

@Repository

public interface CombatRepository extends CrudRepository <Combat , Integer>{

}
