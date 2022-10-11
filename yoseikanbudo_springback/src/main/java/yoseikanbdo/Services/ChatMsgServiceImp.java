package yoseikanbdo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import yoseikanbdo.Models.ChatMsg;
import yoseikanbdo.Repositories.ChatMsgRepository;


@Service
public class ChatMsgServiceImp implements IChatMsgService {
		
	@Autowired	
	ChatMsgRepository ChatMsgRepo;
		
		@Override
		public void SendChatMsg(ChatMsg Chatmsg) {
			// TODO Auto-generated method stub
			ChatMsgRepo.save(Chatmsg);
			
}

		@Override
		public List<ChatMsg> getChatMsgByReciver(String recv) {
			// TODO Auto-generated method stub
			return ChatMsgRepo.getChatMsgByReciver(recv);
		}
		
}
