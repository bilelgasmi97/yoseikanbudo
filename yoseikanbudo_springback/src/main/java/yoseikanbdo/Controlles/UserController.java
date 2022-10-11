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

import yoseikanbdo.Models.User;
import yoseikanbdo.Models.UserType;
import yoseikanbdo.Services.UserServiceImp;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	UserServiceImp Userservice;
	 
	
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddUser(@RequestBody User prdct  ) {
		  Userservice.addUser(prdct );
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public User UpdateUser( @RequestBody User User) {
	        return Userservice.updateUser(User );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{User-id}")
	    public void RemoveUser(@PathVariable("User-id") int Userid) {
	        Userservice.deleteUser(Userid);
	    }
	    
	    
	    @GetMapping("/{User-id}")
	    public Optional<User> GetUserById(@PathVariable("User-id") int Userid) {
			
	    	Optional<User> User = Userservice.getUserById(Userid);
	    	return User;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<User> getAllUser(){
	    	Iterable<User> listUser = Userservice.getallUser();
	    	return listUser;
	    }

}
