package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Activity;


@Repository
public interface ActivityRepository extends CrudRepository < Activity , Integer>{

}
