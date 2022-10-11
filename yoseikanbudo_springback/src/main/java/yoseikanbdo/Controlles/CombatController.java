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

import yoseikanbdo.Models.Combat;
import yoseikanbdo.Services.CombatServiceImp;

@RestController
@RequestMapping("/Combat")
@CrossOrigin(origins = "http://localhost:4200")
public class CombatController {
	
	@Autowired
	CombatServiceImp Combatservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddCombat(@RequestBody Combat prdct ) {
		  Combatservice.addCombat(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Combat UpdateCombat( @RequestBody Combat Combat) {
	        return Combatservice.updateCombat(Combat );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Combat-id}")
	    public void RemoveCombat(@PathVariable("Combat-id") int Combatid) {
	        Combatservice.deleteCombat(Combatid);
	    }
	    
	    
	    @GetMapping("/{Combat-id}")
	    public Optional<Combat> GetCombatById(@PathVariable("Combat-id") int Combatid) {
			
	    	Optional<Combat> Combat = Combatservice.getCombatById(Combatid);
	    	return Combat;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Combat> getAllCombat(){
			
	    	Iterable<Combat> listCombat = Combatservice.getallCombat();
	    	return listCombat;
	    }

}

