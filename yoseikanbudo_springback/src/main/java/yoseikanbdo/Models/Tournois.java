package yoseikanbdo.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor



public class Tournois {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_tr;
	private String nom;
	private String adresse;
	private String date;

}
