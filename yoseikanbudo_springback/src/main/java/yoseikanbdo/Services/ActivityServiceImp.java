package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Activity;
import yoseikanbdo.Repositories.ActivityRepository;

@Service
public class ActivityServiceImp implements IActivityService {
	
	@Autowired	
    ActivityRepository ActivityRepo;
	
	

	@Override
	public void addActivity(Activity prdct) {	
		  ActivityRepo.save(prdct);
	}

	@Override
	public void deleteActivity(int id) {
		// TODO Auto-generated method stub
		ActivityRepo.deleteById(id);
		
	}

	@Override
	public Activity updateActivity(Activity Activity) {
		// TODO Auto-generated method stub
		     //Activity = ActivityRepo.findById(id).orElse(null);
		return ActivityRepo.save(Activity);
	}

	@Override
	public Optional<Activity> getActivityById(int id) {
		Optional<Activity> Activity = ActivityRepo.findById(id);
	return Activity;
		
	}

	@Override
	public Iterable<Activity> getallActivity() {
		Iterable<Activity> listActivity = ActivityRepo.findAll();
		return listActivity;
	}
	
	



}

