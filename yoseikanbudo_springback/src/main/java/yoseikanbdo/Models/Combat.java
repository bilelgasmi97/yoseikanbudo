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
@Table(name = "combat1")
public class Combat {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int tableau;
	private int posit;
	private String nblanc;
	private String cblanc;
	private String nbleu;
	private String cbleu;
	private String gang;
	private String cgang;
	private String perd;
	private String cperd;
	private int gposit;
	private int pposit;
	private String obs;
	private String id_tr;

}
