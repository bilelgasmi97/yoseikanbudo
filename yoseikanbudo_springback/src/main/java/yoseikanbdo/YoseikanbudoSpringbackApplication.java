package yoseikanbdo;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import yoseikanbdo.Repositories.AdminRepository;
import yoseikanbdo.Repositories.ChatMsgRepository;
import yoseikanbdo.Services.ChatMsgServiceImp;
import yoseikanbdo.Services.ProductServiceImp;

@SpringBootApplication

public class YoseikanbudoSpringbackApplication implements CommandLineRunner{
	
	@Resource
	 ProductServiceImp storageService;
	
	@Autowired	
	ChatMsgRepository ChatMsgRepo;
	
	@Autowired	
	AdminRepository  admrepo;

	public static void main(String[] args) {
		SpringApplication.run(YoseikanbudoSpringbackApplication.class, args);
		

	}
	
	@Override
	public void run(String... args) throws Exception {
		storageService.deleteAll();
	    storageService.init();
	    
	    ChatMsgRepo.getChatMsgByReciver("bill").forEach(System.out::println);
	    
	    admrepo.findAll().forEach(System.out::println);
		
	}
	
	
	
	
	
	

}
