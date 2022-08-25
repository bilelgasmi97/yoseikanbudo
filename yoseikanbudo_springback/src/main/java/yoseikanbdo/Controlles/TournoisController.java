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

import yoseikanbdo.Models.Tournois;
import yoseikanbdo.Services.TournoisServiceImp;

@RestController
@RequestMapping("/tournois")
@CrossOrigin(origins = "http://localhost:4200")
public class TournoisController {
	
	@Autowired
	TournoisServiceImp Tournoisservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddTournois(@RequestBody Tournois prdct ) {
		  Tournoisservice.addTournois(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Tournois UpdateTournois( @RequestBody Tournois Tournois) {
	        return Tournoisservice.updateTournois(Tournois );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Tournois-id}")
	    public void RemoveTournois(@PathVariable("Tournois-id") int Tournoisid) {
	        Tournoisservice.deleteTournois(Tournoisid);
	    }
	    
	    
	    @GetMapping("/{Tournois-id}")
	    public Optional<Tournois> GetTournoisById(@PathVariable("Tournois-id") int Tournoisid) {
			
	    	Optional<Tournois> Tournois = Tournoisservice.getTournoisById(Tournoisid);
	    	return Tournois;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Tournois> getAllTournois(){
			
	    	Iterable<Tournois> listTournois = Tournoisservice.getallTournois();
	    	return listTournois;
	    }

}

