package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Activity;

public interface IActivityService {
	
	void addActivity(Activity  Activity);

	 void deleteActivity(int id);

	 Activity updateActivity(Activity  Activity);
	 
	 Optional<Activity> getActivityById(int id);
	 
	 Iterable<Activity> getallActivity();

}
