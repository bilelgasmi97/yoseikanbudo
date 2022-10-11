package yoseikanbdo.Controlles;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import yoseikanbdo.Models.Galerie;
import yoseikanbdo.Models.Product;
import yoseikanbdo.Responce.Response;
import yoseikanbdo.Services.FileuploadServiceImp;
import yoseikanbdo.Services.GalerieServiceImp;

@RestController
@RequestMapping("/galary")
@CrossOrigin(origins = "http://localhost:4200")
public class GalerieController {

	@Autowired
	GalerieServiceImp galerieservice;
	@Autowired
	FileuploadServiceImp fileuploadservice;
	 
	 @PostMapping("/new")
	 public ResponseEntity<Response> uploadFile(@RequestParam("galery") String galery , @RequestParam("file") MultipartFile file) 
			  throws JsonParseException , JsonMappingException , Exception{
	    String message = "";
	    try {
	    	fileuploadservice.save(file);
	      message = "Uploaded the file successfully: " + file.getOriginalFilename();
	   
	      Galerie arti = new ObjectMapper().readValue(galery, Galerie.class);
	      String description =arti.getDescription().toString();
	      String  path = file.getOriginalFilename();
	      String  categorie = file.getContentType().toString();
	     
	      Galerie prod =  new Galerie( description , path , categorie );
	      galerieservice.addGalerie(prod);
	      
	      return ResponseEntity.status(HttpStatus.OK).body(new Response(message));
	    } catch (Exception e) {
	      message = "Could not upload the file: " + file.getOriginalFilename() + "!";
	      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new Response(message));
	    }
	  }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Galerie UpdateGalerie( @RequestBody Galerie Galerie) {
	        return galerieservice.updateGalerie(Galerie );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Galerie-id}")
	    public void RemoveGalerie(@PathVariable("Galerie-id") int Galerieid) {
	        galerieservice.deleteGalerie(Galerieid);
	    }
	    
	    
	    @GetMapping("/{Galerie-id}")
	    public Optional<Galerie> GetGalerieById(@PathVariable("Galerie-id") int Galerieid) {
			
	    	Optional<Galerie> Galerie = galerieservice.getGalerieById(Galerieid);
	    	return Galerie;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Galerie> getAllGalerie(){
			
	    	Iterable<Galerie> listGalerie = galerieservice.getallGalerie();
	    	return listGalerie;
	    }

	
}
