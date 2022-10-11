package yoseikanbdo.Models;


import java.util.Date;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

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
@Table(name = "users")

public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;
	private String user_name;
	private String user_lastname;
	private String user_email;
	private String user_password;
	
	@OneToOne
	@JoinColumn(name = "user_type")
	private UserType user_type;
	
	@ManyToOne
	@JoinColumn(name = "user_team")
	@JsonIgnoreProperties("user_team")
	private Team user_team;
	
	private String user_birthday;
	
	@CreationTimestamp
	private Date createdAt;
	
	
	private int user_phone;
	private String Adresse;
	private String Lieu_naiss;


}
