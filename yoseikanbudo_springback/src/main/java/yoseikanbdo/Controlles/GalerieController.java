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

import yoseikanbdo.Models.Galerie;
import yoseikanbdo.Services.GalerieServiceImp;

@RestController
@RequestMapping("/galary")
@CrossOrigin(origins = "http://localhost:4200")
public class GalerieController {

	@Autowired
	GalerieServiceImp Galerieservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddGalerie(@RequestBody Galerie prdct ) {
		  Galerieservice.addGalerie(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Galerie UpdateGalerie( @RequestBody Galerie Galerie) {
	        return Galerieservice.updateGalerie(Galerie );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Galerie-id}")
	    public void RemoveGalerie(@PathVariable("Galerie-id") int Galerieid) {
	        Galerieservice.deleteGalerie(Galerieid);
	    }
	    
	    
	    @GetMapping("/{Galerie-id}")
	    public Optional<Galerie> GetGalerieById(@PathVariable("Galerie-id") int Galerieid) {
			
	    	Optional<Galerie> Galerie = Galerieservice.getGalerieById(Galerieid);
	    	return Galerie;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Galerie> getAllGalerie(){
			
	    	Iterable<Galerie> listGalerie = Galerieservice.getallGalerie();
	    	return listGalerie;
	    }

	
}
