package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Chat;
import yoseikanbdo.Repositories.ChatRepository;

@Service
public class ChatServiceImp implements IChatService {
	
	@Autowired	
    ChatRepository ChatRepo;
	
	

	@Override
	public void addChat(Chat prdct) {	
		  ChatRepo.save(prdct);
	}

	@Override
	public void deleteChat(int id) {
		// TODO Auto-generated method stub
		ChatRepo.deleteById(id);
		
	}

	@Override
	public Chat updateChat(Chat Chat) {
		// TODO Auto-generated method stub
		     //Chat = ChatRepo.findById(id).orElse(null);
		return ChatRepo.save(Chat);
	}

	@Override
	public Optional<Chat> getChatById(int id) {
		Optional<Chat> Chat = ChatRepo.findById(id);
	return Chat;
		
	}

	@Override
	public Iterable<Chat> getallChat() {
		Iterable<Chat> listChat = ChatRepo.findAll();
		return listChat;
	}
	
	



}

