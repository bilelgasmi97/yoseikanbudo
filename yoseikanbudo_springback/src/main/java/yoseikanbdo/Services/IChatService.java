package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Chat;

public interface IChatService {
	
	void addChat(Chat  Chat);

	 void deleteChat(int id);

	 Chat updateChat(Chat  Chat);
	 
	 Optional<Chat> getChatById(int id);
	 
	 Iterable<Chat> getallChat();

}
