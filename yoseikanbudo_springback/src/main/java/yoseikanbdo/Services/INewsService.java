package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.News;

public interface INewsService {
	
	 void addNews(News  News);

	 void deleteNews(int id);

	 News updateNews(News  News);
	 
	 Optional<News> getNewsById(int id);
	 
	 Iterable<News> getallNews();


}
