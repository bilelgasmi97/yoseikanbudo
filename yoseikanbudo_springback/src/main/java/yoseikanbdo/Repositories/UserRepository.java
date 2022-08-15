package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.User;

@Repository

public interface UserRepository extends CrudRepository <User , Integer> {
	
	

}
