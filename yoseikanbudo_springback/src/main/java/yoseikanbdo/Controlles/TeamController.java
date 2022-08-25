package yoseikanbdo.Controlles;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import yoseikanbdo.Models.Team;
import yoseikanbdo.Services.TeamServiceImp;

@RestController
@RequestMapping("/team")
@CrossOrigin(origins = "http://localhost:4200")
public class TeamController {
	
	@Autowired
	TeamServiceImp Teamservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddTeam(@RequestBody Team prdct ) {
		  Teamservice.addTeam(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Team UpdateTeam( @RequestBody Team Team) {
	        return Teamservice.updateTeam(Team );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Team-id}")
	    public void RemoveTeam(@PathVariable("Team-id") int Teamid) {
	        Teamservice.deleteTeam(Teamid);
	    }
	    
	    
	    @GetMapping("/{Team-id}")
	    public Optional<Team> GetTeamById(@PathVariable("Team-id") int Teamid) {
			
	    	Optional<Team> Team = Teamservice.getTeamById(Teamid);
	    	return Team;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Team> getAllTeam(){
			
	    	Iterable<Team> listTeam = Teamservice.getallTeam();
	    	return listTeam;
	    }

}

