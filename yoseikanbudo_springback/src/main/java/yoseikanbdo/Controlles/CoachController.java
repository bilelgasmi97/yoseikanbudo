package yoseikanbdo.Controlles;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import yoseikanbdo.Models.Coach;
import yoseikanbdo.Services.CoachServiceImp;

@RestController
@RequestMapping("/Coach")
public class CoachController {
	
	@Autowired
	CoachServiceImp Coachservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddCoach(@RequestBody Coach prdct ) {
		  Coachservice.addCoach(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Coach UpdateCoach( @RequestBody Coach Coach) {
	        return Coachservice.updateCoach(Coach );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Coach-id}")
	    public void RemoveCoach(@PathVariable("Coach-id") int Coachid) {
	        Coachservice.deleteCoach(Coachid);
	    }
	    
	    
	    @GetMapping("/{Coach-id}")
	    public Optional<Coach> GetCoachById(@PathVariable("Coach-id") int Coachid) {
			
	    	Optional<Coach> Coach = Coachservice.getCoachById(Coachid);
	    	return Coach;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Coach> getAllCoach(){
			
	    	Iterable<Coach> listCoach = Coachservice.getallCoach();
	    	return listCoach;
	    }

}
