package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Chat;

@Repository
public interface ChatRepository extends CrudRepository <Chat , Integer>{

}
