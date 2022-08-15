package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Player;

@Repository
public interface PlayerRepository extends CrudRepository <Player , Integer> {

}
