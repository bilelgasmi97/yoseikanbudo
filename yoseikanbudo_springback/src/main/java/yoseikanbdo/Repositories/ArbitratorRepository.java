package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Arbitrator;



@Repository
public interface ArbitratorRepository extends CrudRepository < Arbitrator	, Integer> {

}
