package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.News;
import yoseikanbdo.Repositories.NewsRepository;

@Service
public class NewsServiceImp implements INewsService {
	
	@Autowired	
    NewsRepository NewsRepo;
	
	

	@Override
	public void addNews(News prdct) {	
		  NewsRepo.save(prdct);
	}

	@Override
	public void deleteNews(int id) {
		// TODO Auto-generated method stub
		NewsRepo.deleteById(id);
		
	}

	@Override
	public News updateNews(News News) {
		// TODO Auto-generated method stub
		     //News = NewsRepo.findById(id).orElse(null);
		return NewsRepo.save(News);
	}

	@Override
	public Optional<News> getNewsById(int id) {
		Optional<News> News = NewsRepo.findById(id);
	return News;
		
	}

	@Override
	public Iterable<News> getallNews() {
		Iterable<News> listNews = NewsRepo.findAll();
		return listNews;
	}
	
	



}

