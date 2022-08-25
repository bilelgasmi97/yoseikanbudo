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

@Table(name = "products")
public class Product  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int product_id;
	private String product_name;
	private float product_prix;
	private String product_image;
	
	public Product(String product_name , float product_prix , String product_image ) {
		this.product_name = product_name;
		this.product_prix = product_prix;
		this.product_image = product_image;
	}
}
