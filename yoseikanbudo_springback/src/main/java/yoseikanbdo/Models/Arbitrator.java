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
	private String NOM;
	private String PRENOM;
	private String grade;
	private int cote;
	private String email;
	private int phone;

}
