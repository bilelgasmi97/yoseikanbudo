package yoseikanbdo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import yoseikanbdo.Models.ChatMsg;


@Repository
public interface ChatMsgRepository extends CrudRepository <ChatMsg , Integer> {
	
	@Query("From ChatMsg where reciver=:recv or sender=:recv")
	public List<ChatMsg> getChatMsgByReciver(String recv);

}
