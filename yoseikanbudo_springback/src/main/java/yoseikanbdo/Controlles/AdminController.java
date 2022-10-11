package yoseikanbdo.Controlles;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


import yoseikanbdo.Models.Admin;

import yoseikanbdo.Repositories.AdminRepository;


@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	
	@Autowired
	AdminRepository Admrepo;
	 
	 @GetMapping("/all")
	    public Iterable<Admin> getAllCoach(){
			
	    	Iterable<Admin> listadmin =  Admrepo.findAll();
	    	return listadmin;
	    }
	 

}
