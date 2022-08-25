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
@Table(name = "actualites1")

public class News {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int news_id;
	private String news_title;
	private String detail;
	private String news_date;
	private String pic;
	private String pic_thumb;
	private String type_fav;
	private String categorie;

}
