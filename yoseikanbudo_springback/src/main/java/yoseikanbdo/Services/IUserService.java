package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.User;

public interface IUserService {
	
	 void addUser(User  User);

	 void deleteUser(int id);

	 User updateUser(User  User);
	 
	 Optional<User> getUserById(int id);
	 
	 Iterable<User> getallUser();

}
