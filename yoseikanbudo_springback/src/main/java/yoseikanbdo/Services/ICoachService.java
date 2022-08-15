package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Coach;

public interface ICoachService {
	
	void addCoach(Coach  Coach);

	 void deleteCoach(int id);

	 Coach updateCoach(Coach  Coach);
	 
	 Optional<Coach> getCoachById(int id);
	 
	 Iterable<Coach> getallCoach();

}
