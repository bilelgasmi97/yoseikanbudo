package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Team;

public interface ITeamService {
	
	 void addTeam(Team  Team);

	 void deleteTeam(int id);

	 Team updateTeam(Team  Team);
	 
	 Optional<Team> getTeamById(int id);
	 
	 Iterable<Team> getallTeam();

}
