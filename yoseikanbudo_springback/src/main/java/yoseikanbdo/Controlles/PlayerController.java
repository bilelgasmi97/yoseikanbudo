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

import yoseikanbdo.Models.Player;
import yoseikanbdo.Services.PlayerServiceImp;

@RestController
@RequestMapping("/player")
@CrossOrigin(origins = "http://localhost:4200")
public class PlayerController {
	
	@Autowired
	PlayerServiceImp Playerservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddPlayer(@RequestBody Player prdct ) {
		  Playerservice.addPlayer(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Player UpdatePlayer( @RequestBody Player Player) {
	        return Playerservice.updatePlayer(Player );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Player-id}")
	    public void RemovePlayer(@PathVariable("Player-id") int Playerid) {
	        Playerservice.deletePlayer(Playerid);
	    }
	    
	    
	    @GetMapping("/{Player-id}")
	    public Optional<Player> GetPlayerById(@PathVariable("Player-id") int Playerid) {
			
	    	Optional<Player> Player = Playerservice.getPlayerById(Playerid);
	    	return Player;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Player> getAllPlayer(){
			
	    	Iterable<Player> listPlayer = Playerservice.getallPlayer();
	    	return listPlayer;
	    }

}

