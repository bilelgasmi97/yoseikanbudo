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
public class Galerie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_gal;
	private String description;
	private String path;
	private int type;
	
	@CreationTimestamp
	private Date dt;
	private String categorie;
	
	public Galerie(String description , String path , String categorie ) {
		this.description = description;
		this.path = path;
		this.categorie= categorie;
		
	}

}
