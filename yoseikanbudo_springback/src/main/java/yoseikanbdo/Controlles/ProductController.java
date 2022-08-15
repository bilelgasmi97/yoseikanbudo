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

import yoseikanbdo.Models.Product;
import yoseikanbdo.Services.ProductServiceImp;






@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	
	
	@Autowired
	ProductServiceImp productservice;
	
	 @PostMapping("/new")

	 public void AddProduct(@RequestBody Product prdct  ) {
		  productservice.addProduct(prdct);
	 }
	 
	 @PostMapping("/new/file")

	 public void AddProduct(@RequestBody Product prdct  , @RequestParam("file") MultipartFile file) {
		  productservice.addProduct(prdct , file);
	 }
	 
	 @PutMapping("/update")
	 @ResponseBody
	    public Product UpdateProduct( @RequestBody Product Product) {
	        return productservice.updateProduct(Product );
	    }
	 	
	 	
	    @DeleteMapping("/delete/{Product-id}")
	    public void RemoveProduct(@PathVariable("Product-id") int Productid) {
	        productservice.deleteProduct(Productid);
	    }
	    
	    
	    @GetMapping("/{Product-id}")
	    public Optional<Product> GetProductById(@PathVariable("Product-id") int Productid) {
			
	    	Optional<Product> Product = productservice.getProductById(Productid);
	    	return Product;
	    }
	       
	  
	    @GetMapping("/all")
	    public Iterable<Product> getAllProduct(){
			
	    	Iterable<Product> listProduct = productservice.getallProduct();
	    	return listProduct;
	    }

}
