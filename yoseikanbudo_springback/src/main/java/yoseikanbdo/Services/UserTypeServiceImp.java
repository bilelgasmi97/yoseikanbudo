package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.UserType;
import yoseikanbdo.Repositories.UserTypeRepository;

@Service
public class UserTypeServiceImp implements IUserTypeService {
	
	@Autowired	
    UserTypeRepository UserTypeRepo;
	
	

	@Override
	public void addUserType(UserType prdct) {	
		  UserTypeRepo.save(prdct);
	}

	@Override
	public void deleteUserType(int id) {
		// TODO Auto-generated method stub
		UserTypeRepo.deleteById(id);
		
	}

	@Override
	public UserType updateUserType(UserType UserType) {
		// TODO Auto-generated method stub
		     //UserType = UserTypeRepo.findById(id).orElse(null);
		return UserTypeRepo.save(UserType);
	}

	@Override
	public Optional<UserType> getUserTypeById(int id) {
		Optional<UserType> UserType = UserTypeRepo.findById(id);
	return UserType;
		
	}

	@Override
	public Iterable<UserType> getallUserType() {
		Iterable<UserType> listUserType = UserTypeRepo.findAll();
		return listUserType;
	}
	
	



}


