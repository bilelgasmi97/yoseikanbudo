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
@Table(name = "arbitre")


public class Arbitrator {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int id_arbitre;
	private String name;
	private String prenom;
	private String grade;
	private String cote;
	private String email;
	private String phone;

}
