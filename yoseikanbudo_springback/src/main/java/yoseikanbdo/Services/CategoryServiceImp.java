package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Category;
import yoseikanbdo.Repositories.CategoryRepository;

@Service
public class CategoryServiceImp implements ICategoryService {
	
	@Autowired	
    CategoryRepository CategoryRepo;
	
	

	@Override
	public void addCategory(Category prdct) {	
		  CategoryRepo.save(prdct);
	}

	@Override
	public void deleteCategory(int id) {
		// TODO Auto-generated method stub
		CategoryRepo.deleteById(id);
		
	}

	@Override
	public Category updateCategory(Category Category) {
		// TODO Auto-generated method stub
		     //Category = CategoryRepo.findById(id).orElse(null);
		return CategoryRepo.save(Category);
	}

	@Override
	public Optional<Category> getCategoryById(int id) {
		Optional<Category> Category = CategoryRepo.findById(id);
	return Category;
		
	}

	@Override
	public Iterable<Category> getallCategory() {
		Iterable<Category> listCategory = CategoryRepo.findAll();
		return listCategory;
	}
	
	



}

