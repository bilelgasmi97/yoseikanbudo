package yoseikanbdo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Galerie;


@Repository
public interface GalerieRepository extends CrudRepository < Galerie , Integer>{

}
