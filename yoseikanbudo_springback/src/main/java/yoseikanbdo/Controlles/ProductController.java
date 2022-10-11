package yoseikanbdo.Controlles;


import java.io.File;
import java.util.Optional;

import javax.servlet.ServletContext;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;


import yoseikanbdo.Models.Product;
import yoseikanbdo.Responce.Response;
import yoseikanbdo.Services.ProductServiceImp;






@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	
	
	@Autowired
	ProductServiceImp productservice;
	
	@Autowired  
	ServletContext context;
	
	 @PostMapping("/ne")

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
	    
	    
	    
	    @PostMapping("/new")
		 public ResponseEntity<Response> createProduct (@RequestParam("file") MultipartFile file,
				 @RequestParam("product") String product) throws JsonParseException , JsonMappingException , Exception
		 {
			 System.out.println("Ok .............");
	        Product arti = new ObjectMapper().readValue(product, Product.class);
	        boolean isExit = new File(context.getRealPath("/Images/")).exists();
	        if (!isExit)
	        {
	        	new File (context.getRealPath("/Images/")).mkdir();
	        	System.out.println("mk dir.............");
	        	System.out.println(file.getOriginalFilename());
	        
	        }
	        String filename = file.getOriginalFilename();
	        System.out.println(filename);
	        String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
	        File serverFile = new File (context.getRealPath("/Images/"+File.separator+newFileName));
	        try
	        {
	        	System.out.println("Image");
	        	 FileUtils.writeByteArrayToFile(serverFile,file.getBytes());
	        	 System.out.println(newFileName);
	        	 
	        }catch(Exception e) {
	        	e.printStackTrace();
	        }

	       
	        arti.setProduct_image(newFileName);
	        Product art = productservice.addProduct(arti); 
	        if (art != null)
	        {
	        	return new ResponseEntity<Response>(new Response (newFileName),HttpStatus.OK);
	        }
	        else
	        {
	        	return new ResponseEntity<Response>(new Response ("Product not saved"),HttpStatus.BAD_REQUEST);	
	        }
		 }
	    
	    @PostMapping("/upload")
		  public ResponseEntity<Response> uploadFile(@RequestParam("product") String product , @RequestParam("file") MultipartFile file) 
				  throws JsonParseException , JsonMappingException , Exception{
		    String message = "";
		    try {
		      productservice.save(file);
		      message = "Uploaded the file successfully: " + file.getOriginalFilename();
		   
		      Product arti = new ObjectMapper().readValue(product, Product.class);
		      String name =arti.getProduct_name().toString();
		      float prix = arti.getProduct_prix();

		      String  path = file.getOriginalFilename();
		      String ddd = file.getName();
		      Product prod =  new Product( name , prix , path );
		      productservice.addProduct(prod);
		      
		      return ResponseEntity.status(HttpStatus.OK).body(new Response(message));
		    } catch (Exception e) {
		      message = "Could not upload the file: " + file.getOriginalFilename() + "!";
		      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new Response(message));
		    }
		  }

}
