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

import yoseikanbdo.Models.Activity;
import yoseikanbdo.Services.ActivityServiceImp;

@RestController
@RequestMapping("/activites")
@CrossOrigin(origins = "http://localhost:4200")
public class ActivityController {

	@Autowired
	ActivityServiceImp Activityservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddActivity(@RequestBody Activity prdct ) {
		  Activityservice.addActivity(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Activity UpdateActivity( @RequestBody Activity Activity) {
	        return Activityservice.updateActivity(Activity );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Activity-id}")
	    public void RemoveActivity(@PathVariable("Activity-id") int Activityid) {
	        Activityservice.deleteActivity(Activityid);
	    }
	    
	    
	    @GetMapping("/{Activity-id}")
	    public Optional<Activity> GetActivityById(@PathVariable("Activity-id") int Activityid) {
			
	    	Optional<Activity> Activity = Activityservice.getActivityById(Activityid);
	    	return Activity;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Activity> getAllActivity(){
			
	    	Iterable<Activity> listActivity = Activityservice.getallActivity();
	    	return listActivity;
	    }

	
}
