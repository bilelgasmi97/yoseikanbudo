package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Sell;

@Repository

public interface SellRepository extends CrudRepository <Sell , Integer> {

}
