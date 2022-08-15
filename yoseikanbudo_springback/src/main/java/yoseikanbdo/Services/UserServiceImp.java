package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.User;
import yoseikanbdo.Repositories.UserRepository;

@Service
public class UserServiceImp implements IUserService {
	
	@Autowired	
    UserRepository UserRepo;
	
	

	@Override
	public void addUser(User prdct) {	
		  UserRepo.save(prdct);
	}

	@Override
	public void deleteUser(int id) {
		// TODO Auto-generated method stub
		UserRepo.deleteById(id);
		
	}

	@Override
	public User updateUser(User User) {
		// TODO Auto-generated method stub
		     //User = UserRepo.findById(id).orElse(null);
		return UserRepo.save(User);
	}

	@Override
	public Optional<User> getUserById(int id) {
		Optional<User> User = UserRepo.findById(id);
	return User;
		
	}

	@Override
	public Iterable<User> getallUser() {
		Iterable<User> listUser = UserRepo.findAll();
		return listUser;
	}
	
	



}

