package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Category;

public interface ICategoryService {
	
	void addCategory(Category  Category);

	 void deleteCategory(int id);

	 Category updateCategory(Category  Category);
	 
	 Optional<Category> getCategoryById(int id);
	 
	 Iterable<Category> getallCategory();

}
