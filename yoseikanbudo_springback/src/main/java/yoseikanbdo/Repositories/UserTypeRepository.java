package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.UserType;

@Repository

public interface UserTypeRepository extends CrudRepository <UserType , Integer> {

}
