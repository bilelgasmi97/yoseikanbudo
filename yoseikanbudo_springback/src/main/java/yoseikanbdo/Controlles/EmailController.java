package yoseikanbdo.Controlles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import yoseikanbdo.Models.EmailDetails;
import yoseikanbdo.Services.EmailServiceImp;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {
	
	 @Autowired
	  private EmailServiceImp emailService;
	  
	    // Sending a simple Email
	    @PostMapping("/sendMail")
	    public String
	    sendMail(@RequestBody EmailDetails details)
	    {
	        String status
	            = emailService.sendSimpleMail(details);
	 
	        return status;
	    }
	 
	    // Sending email with attachment
	    @PostMapping("/sendMailWithAttachment")
	    public String sendMailWithAttachment(
	        @RequestBody EmailDetails details)
	    {
	        String status
	            = emailService.sendMailWithAttachment(details);
	 
	        return status;
	    }


}
