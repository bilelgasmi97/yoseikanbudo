package yoseikanbdo.Controlles;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import yoseikanbdo.Models.Category;
import yoseikanbdo.Services.CategoryServiceImp;

@RestController
@RequestMapping("/Category")
public class CategoryController {
	
	@Autowired
	CategoryServiceImp Categoryservice;
	 
	 @PostMapping("/new")
	 @ResponseBody
	 public void AddCategory(@RequestBody Category prdct ) {
		  Categoryservice.addCategory(prdct);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Category UpdateCategory( @RequestBody Category Category) {
	        return Categoryservice.updateCategory(Category );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Category-id}")
	    public void RemoveCategory(@PathVariable("Category-id") int Categoryid) {
	        Categoryservice.deleteCategory(Categoryid);
	    }
	    
	    
	    @GetMapping("/{Category-id}")
	    public Optional<Category> GetCategoryById(@PathVariable("Category-id") int Categoryid) {
			
	    	Optional<Category> Category = Categoryservice.getCategoryById(Categoryid);
	    	return Category;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Category> getAllCategory(){
			
	    	Iterable<Category> listCategory = Categoryservice.getallCategory();
	    	return listCategory;
	    }

}

