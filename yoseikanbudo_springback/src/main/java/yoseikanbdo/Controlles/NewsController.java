package yoseikanbdo.Controlles;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import yoseikanbdo.Models.News;
import yoseikanbdo.Services.NewsServiceImp;
import yoseikanbdo.Services.NewsServiceImp;






@RestController
@RequestMapping("/news")
@CrossOrigin(origins = "http://localhost:4200")
public class NewsController {
	
	
	
	@Autowired
	NewsServiceImp newsservice;
	
	 @PostMapping("/new")

	 public void AddNews(@RequestBody News prdct  ) {
		  newsservice.addNews(prdct);
	 }
	 
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public News UpdateNews( @RequestBody News News) {
	        return newsservice.updateNews(News );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{News-id}")
	    public void RemoveNews(@PathVariable("News-id") int Newsid) {
	        newsservice.deleteNews(Newsid);
	    }
	    
	    
	    @GetMapping("/{News-id}")
	    public Optional<News> GetNewsById(@PathVariable("News-id") int Newsid) {
			
	    	Optional<News> News = newsservice.getNewsById(Newsid);
	    	return News;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<News> getAllNews(){
			
	    	Iterable<News> listNews = newsservice.getallNews();
	    	return listNews;
	    }

}
