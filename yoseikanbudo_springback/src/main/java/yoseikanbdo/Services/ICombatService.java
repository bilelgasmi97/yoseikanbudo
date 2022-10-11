package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Combat;

public interface ICombatService {
	
	void addCombat(Combat  Combat);

	 void deleteCombat(int id);

	 Combat updateCombat(Combat  Combat);
	 
	 Optional<Combat> getCombatById(int id);
	 
	 Iterable<Combat> getallCombat();

}
