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
public class Galerie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_gal;
	private String description;
	private String path;
	private int type;
	private String dt;
	private String categorie;

}
