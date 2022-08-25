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

import yoseikanbdo.Models.UserType;
import yoseikanbdo.Services.UserTypeServiceImp;

@RestController
@RequestMapping("/usertype")
@CrossOrigin(origins = "http://localhost:4200")

public class UserTypeController {
	
	@Autowired
	UserTypeServiceImp UserTypeservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddUserType(@RequestBody UserType prdct ) {
		  UserTypeservice.addUserType(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public UserType UpdateUserType( @RequestBody UserType UserType) {
	        return UserTypeservice.updateUserType(UserType );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{UserType-id}")
	    public void RemoveUserType(@PathVariable("UserType-id") int UserTypeid) {
	        UserTypeservice.deleteUserType(UserTypeid);
	    }
	    
	    
	    @GetMapping("/{UserType-id}")
	    public Optional<UserType> GetUserTypeById(@PathVariable("UserType-id") int UserTypeid) {
			
	    	Optional<UserType> UserType = UserTypeservice.getUserTypeById(UserTypeid);
	    	return UserType;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<UserType> getAllUserType(){
	    	Iterable<UserType> listUserType = UserTypeservice.getallUserType();
	    	return listUserType;
	    }


}
