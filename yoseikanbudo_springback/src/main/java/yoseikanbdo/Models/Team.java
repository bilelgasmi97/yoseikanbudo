package yoseikanbdo.Models;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Table(name = "equipe")

public class Team {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_eq;
	private String nom_eq;
	private String cote;
	private String precident_eq;
	private String email;
	private String fax;
	private String phone;
	
	@ManyToOne
	@JoinColumn(name = "entraineur")
	private Coach entraineur;
	
	private String papier;
	private String remarque;
	

}
