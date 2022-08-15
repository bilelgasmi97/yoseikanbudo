package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Team;
import yoseikanbdo.Repositories.TeamRepository;

@Service
public class TeamServiceImp implements ITeamService {
	
	@Autowired	
    TeamRepository TeamRepo;
	
	

	@Override
	public void addTeam(Team prdct) {	
		  TeamRepo.save(prdct);
	}

	@Override
	public void deleteTeam(int id) {
		// TODO Auto-generated method stub
		TeamRepo.deleteById(id);
		
	}

	@Override
	public Team updateTeam(Team Team) {
		// TODO Auto-generated method stub
		     //Team = TeamRepo.findById(id).orElse(null);
		return TeamRepo.save(Team);
	}

	@Override
	public Optional<Team> getTeamById(int id) {
		Optional<Team> Team = TeamRepo.findById(id);
	return Team;
		
	}

	@Override
	public Iterable<Team> getallTeam() {
		Iterable<Team> listTeam = TeamRepo.findAll();
		return listTeam;
	}
	
	



}


