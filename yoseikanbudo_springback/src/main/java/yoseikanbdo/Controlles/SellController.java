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

import yoseikanbdo.Models.Sell;
import yoseikanbdo.Services.SellServiceImp;

@RestController
@RequestMapping("/Sell")
public class SellController {
	
	@Autowired
	SellServiceImp Sellservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddSell(@RequestBody Sell prdct ) {
		  Sellservice.addSell(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Sell UpdateSell( @RequestBody Sell Sell) {
	        return Sellservice.updateSell(Sell );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Sell-id}")
	    public void RemoveSell(@PathVariable("Sell-id") int Sellid) {
	        Sellservice.deleteSell(Sellid);
	    }
	    
	    
	    @GetMapping("/{Sell-id}")
	    public Optional<Sell> GetSellById(@PathVariable("Sell-id") int Sellid) {
			
	    	Optional<Sell> Sell = Sellservice.getSellById(Sellid);
	    	return Sell;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Sell> getAllSell(){
			
	    	Iterable<Sell> listSell = Sellservice.getallSell();
	    	return listSell;
	    }

}
