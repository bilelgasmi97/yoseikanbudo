package yoseikanbdo.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "chatmessage")
public class Chat {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int ID;
	private int idexp;
	private int iddest;
	private String message;
	private int etat_msg;
	private String cle_chat;
	private int dt;

}
