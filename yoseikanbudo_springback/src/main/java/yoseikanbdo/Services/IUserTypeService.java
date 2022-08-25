package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.UserType;

public interface IUserTypeService {
	
	void addUserType(UserType  UserType);

	 void deleteUserType(int id);

	 UserType updateUserType(UserType  UserType);
	 
	 Optional<UserType> getUserTypeById(int id);
	 
	 Iterable<UserType> getallUserType();

}
