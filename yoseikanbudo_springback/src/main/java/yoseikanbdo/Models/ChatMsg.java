package yoseikanbdo.Models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatMsg {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String reciver;
	private String sender;
	private String content;
	
	@Override
	public String toString() {
		return "ChatMsg [id=" + id + ", reciver=" + reciver + ", sender=" + sender + ", content=" + content
				+ ", sendedAt=" + sendedAt + "]";
	}

	@CreationTimestamp
	private Date sendedAt;

}
