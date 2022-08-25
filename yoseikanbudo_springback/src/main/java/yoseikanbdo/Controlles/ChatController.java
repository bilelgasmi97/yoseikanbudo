package yoseikanbdo.Controlles;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import yoseikanbdo.Models.Chat;
import yoseikanbdo.Services.ChatServiceImp;

@RestController
@RequestMapping("/Chat")
public class ChatController {
	
	@Autowired
	ChatServiceImp Chatservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddChat(@RequestBody Chat prdct ) {
		  Chatservice.addChat(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Chat UpdateChat( @RequestBody Chat Chat) {
	        return Chatservice.updateChat(Chat );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Chat-id}")
	    public void RemoveChat(@PathVariable("Chat-id") int Chatid) {
	        Chatservice.deleteChat(Chatid);
	    }
	    
	    
	    @GetMapping("/{Chat-id}")
	    public Optional<Chat> GetChatById(@PathVariable("Chat-id") int Chatid) {
			
	    	Optional<Chat> Chat = Chatservice.getChatById(Chatid);
	    	return Chat;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Chat> getAllChat(){
			
	    	Iterable<Chat> listChat = Chatservice.getallChat();
	    	return listChat;
	    }

}

