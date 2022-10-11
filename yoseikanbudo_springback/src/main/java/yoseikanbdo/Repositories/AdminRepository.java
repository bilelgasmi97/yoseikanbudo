package yoseikanbdo.Repositories;



import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.Admin;



@Repository

public interface AdminRepository extends CrudRepository < Admin , Integer>{
	
	@Query("From Admin where gmail=:gm and password=:pas")
	public Admin getAdmin(String gm , String pas);

}
