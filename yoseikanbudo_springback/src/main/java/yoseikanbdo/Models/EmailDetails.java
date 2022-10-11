package yoseikanbdo.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor

public class EmailDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id; 
	private String recipient;
    private String msgBody;
    private String subject;
    private String attachment;
}