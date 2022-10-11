package yoseikanbdo.Models;

import java.sql.Date;

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

public class Admin {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int id;
	private String gmail;
	private String password;
	private String name;
	
	@Override
	public String toString() {
		return "Admin [id=" + id + ", gmail=" + gmail + ", password=" + password + ", name=" + name + "]";
	}

}
