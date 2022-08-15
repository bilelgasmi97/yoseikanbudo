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
@Table(name = "activité")

public class Activity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int ID;
	private String Designation;
	private String lieu;
	private String Date;
	private String Responsable;
	private int IDType_Stage;
	private int ID_Relation;
	private String Type_Relation;
	private String Visa_direction;

}
