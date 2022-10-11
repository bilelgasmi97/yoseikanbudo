package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Sell;

public interface ISellService {
	
	 void addSell(Sell  Sell);

	 void deleteSell(int id);

	 Sell updateSell(Sell  Sell);
	 
	 Optional<Sell> getSellById(int id);
	 
	 Iterable<Sell> getallSell();

}
