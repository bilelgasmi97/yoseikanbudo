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
@Table(name = "categorie")

public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int Id_Categorie;
	private String Li_Categorie;

	
}
