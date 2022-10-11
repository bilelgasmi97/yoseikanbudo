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

import yoseikanbdo.Models.Arbitrator;
import yoseikanbdo.Services.ArbitratorServiceImp;



@RestController
@RequestMapping("/arbitrator")
@CrossOrigin(origins = "http://localhost:4200")
public class ArbitratorController {
	
	
	@Autowired  
	ArbitratorServiceImp Arbitratorservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddArbitrator(@RequestBody Arbitrator prdct ) {
		  Arbitratorservice.addArbitrator(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Arbitrator UpdateArbitrator( @RequestBody Arbitrator Arbitrator) {
	        return Arbitratorservice.updateArbitrator(Arbitrator );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Arbitrator-id}")
	    public void RemoveArbitrator(@PathVariable("Arbitrator-id") int Arbitratorid) {
	        Arbitratorservice.deleteArbitrator(Arbitratorid);
	    }
	    
	    
	    @GetMapping("/{Arbitrator-id}")
	    public Optional<Arbitrator> GetArbitratorById(@PathVariable("Arbitrator-id") int Arbitratorid) {
			
	    	Optional<Arbitrator> Arbitrator = Arbitratorservice.getArbitratorById(Arbitratorid);
	    	return Arbitrator;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Arbitrator> getAllArbitrator(){
			
	    	Iterable<Arbitrator> listArbitrator = Arbitratorservice.getallArbitrator();
	    	return listArbitrator;
	    }


}
