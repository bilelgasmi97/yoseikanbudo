package yoseikanbdo;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import yoseikanbdo.Services.ProductServiceImp;

@SpringBootApplication

public class YoseikanbudoSpringbackApplication implements CommandLineRunner{
	
	@Resource
	 ProductServiceImp storageService;

	public static void main(String[] args) {
		SpringApplication.run(YoseikanbudoSpringbackApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		storageService.deleteAll();
	    storageService.init();
		
	}

}
