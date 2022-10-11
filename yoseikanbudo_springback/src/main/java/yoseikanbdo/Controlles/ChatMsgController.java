package yoseikanbdo.Controlles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import yoseikanbdo.Models.Category;
import yoseikanbdo.Models.ChatMsg;
import yoseikanbdo.Services.ChatMsgServiceImp;


@RestController
@RequestMapping("/chatmsg")
@CrossOrigin(origins = "http://localhost:4200")
public class ChatMsgController {
	
	@Autowired
	ChatMsgServiceImp chatmsgservice;
	 
	 @PostMapping("/send")
	 @ResponseBody
	 public void sendchatmsg(@RequestBody ChatMsg prdct ) {
		  chatmsgservice.SendChatMsg(prdct);
	 }
	 
	 @GetMapping("/getmsg/{reciver}")
	 public List<ChatMsg> getChatMsgByReciver(@PathVariable("reciver") String recv){
		 return chatmsgservice.getChatMsgByReciver(recv);
	 }

}
