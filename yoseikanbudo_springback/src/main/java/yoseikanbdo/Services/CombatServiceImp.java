package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Combat;
import yoseikanbdo.Repositories.CombatRepository;

@Service
public class CombatServiceImp implements ICombatService {
	
	@Autowired	
    CombatRepository CombatRepo;
	
	

	@Override
	public void addCombat(Combat prdct) {	
		  CombatRepo.save(prdct);
	}

	@Override
	public void deleteCombat(int id) {
		// TODO Auto-generated method stub
		CombatRepo.deleteById(id);
		
	}

	@Override
	public Combat updateCombat(Combat Combat) {
		// TODO Auto-generated method stub
		     //Combat = CombatRepo.findById(id).orElse(null);
		return CombatRepo.save(Combat);
	}

	@Override
	public Optional<Combat> getCombatById(int id) {
		Optional<Combat> Combat = CombatRepo.findById(id);
	return Combat;
		
	}

	@Override
	public Iterable<Combat> getallCombat() {
		Iterable<Combat> listCombat = CombatRepo.findAll();
		return listCombat;
	}
	
	



}

