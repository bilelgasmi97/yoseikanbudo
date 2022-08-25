package yoseikanbdo.Services;

import yoseikanbdo.Models.EmailDetails;

public interface IEmailService {
	
 String sendSimpleMail(EmailDetails details);
	 
	 String sendMailWithAttachment(EmailDetails details);

}
