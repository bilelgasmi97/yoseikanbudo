package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Coach;
import yoseikanbdo.Repositories.CoachRepository;

@Service
public class CoachServiceImp implements ICoachService {
	
	@Autowired	
    CoachRepository CoachRepo;
	
	

	@Override
	public void addCoach(Coach prdct) {	
		  CoachRepo.save(prdct);
	}

	@Override
	public void deleteCoach(int id) {
		// TODO Auto-generated method stub
		CoachRepo.deleteById(id);
		
	}

	@Override
	public Coach updateCoach(Coach Coach) {
		// TODO Auto-generated method stub
		     //Coach = CoachRepo.findById(id).orElse(null);
		return CoachRepo.save(Coach);
	}

	@Override
	public Optional<Coach> getCoachById(int id) {
		Optional<Coach> Coach = CoachRepo.findById(id);
	return Coach;
		
	}

	@Override
	public Iterable<Coach> getallCoach() {
		Iterable<Coach> listCoach = CoachRepo.findAll();
		return listCoach;
	}
	
	



}


