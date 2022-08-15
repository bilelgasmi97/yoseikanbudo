package yoseikanbdo.Services;


import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import yoseikanbdo.Models.Product;
import yoseikanbdo.Repositories.ProductRepository;


@Service
public class ProductServiceImp implements IProductService {
	
	@Autowired	
    ProductRepository ProductRepo;
	
	

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
	public void addProduct(Product Product) {
		ProductRepo.save(Product);
	}
	
	



}
