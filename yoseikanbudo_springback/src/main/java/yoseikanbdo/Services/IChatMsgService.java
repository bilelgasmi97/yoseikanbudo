package yoseikanbdo.Services;

import java.util.List;

import yoseikanbdo.Models.ChatMsg;

public interface IChatMsgService {
	
	void SendChatMsg(ChatMsg  Chatmsg);
	
	List<ChatMsg> getChatMsgByReciver(String recv);

}
