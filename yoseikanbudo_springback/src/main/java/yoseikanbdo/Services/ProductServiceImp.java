package yoseikanbdo.Services;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import yoseikanbdo.Models.Product;
import yoseikanbdo.Repositories.ProductRepository;


@Service
public class ProductServiceImp implements IProductService {
	
	@Autowired	
    ProductRepository ProductRepo;
	
	private final Path root = Paths.get("uploads");
	
	

	@Override
	public void addProduct(Product prdct , MultipartFile file) {	
		Product pp = new Product();
		String filename = file.getOriginalFilename();
		pp.setProduct_prix(prdct.getProduct_prix());
		pp.setProduct_name(prdct.getProduct_name());
		try {
			pp.setProduct_image(file.getBytes().toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		  ProductRepo.save(pp);
	}

	@Override
	public void deleteProduct(int id) {
		// TODO Auto-generated method stub
		ProductRepo.deleteById(id);
		
	}

	@Override
	public Product updateProduct(Product Product) {
		// TODO Auto-generated method stub
		     //Product = ProductRepo.findById(id).orElse(null);
		return ProductRepo.save(Product);
	}

	@Override
	public Optional<Product> getProductById(int id) {
		Optional<Product> Product = ProductRepo.findById(id);
	return Product;
		
	}

	@Override
	public Iterable<Product> getallProduct() {
		Iterable<Product> listProduct = ProductRepo.findAll();
		return listProduct;
	}

	@Override
	public Product addProduct(Product Product) {
		return ProductRepo.save(Product);
	}
	
	@Override
	  public void init() {
	    try {
	      Files.createDirectory(root);
	    } catch (IOException e) {
	      throw new RuntimeException("Could not initialize folder for upload!");
	    }
	  }
	  
	  @Override
	  public void save(MultipartFile file) {
	    try {
	      Files.copy(file.getInputStream(), this.root.resolve(file.getOriginalFilename()));
	    } catch (Exception e) {
	      throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
	    }
	  }
	  @Override
	  public void deleteAll() {
	    FileSystemUtils.deleteRecursively(root.toFile());
	  }
	
	



}
