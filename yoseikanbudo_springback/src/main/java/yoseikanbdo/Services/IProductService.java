package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import yoseikanbdo.Models.Product;



public interface IProductService {
	
	 void addProduct(Product  Product);

	 void deleteProduct(int id);

	 Product updateProduct(Product  Product);
	 
	 Optional<Product> getProductById(int id);
	 
	 Iterable<Product> getallProduct();

	void addProduct(Product prdct, MultipartFile file);
	


}
