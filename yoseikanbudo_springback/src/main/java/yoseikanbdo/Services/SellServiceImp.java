package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Sell;
import yoseikanbdo.Repositories.SellRepository;

@Service
public class SellServiceImp implements ISellService {
	
	@Autowired	
    SellRepository SellRepo;
	
	

	@Override
	public void addSell(Sell prdct) {	
		  SellRepo.save(prdct);
	}

	@Override
	public void deleteSell(int id) {
		// TODO Auto-generated method stub
		SellRepo.deleteById(id);
		
	}

	@Override
	public Sell updateSell(Sell Sell) {
		// TODO Auto-generated method stub
		     //Sell = SellRepo.findById(id).orElse(null);
		return SellRepo.save(Sell);
	}

	@Override
	public Optional<Sell> getSellById(int id) {
		Optional<Sell> Sell = SellRepo.findById(id);
	return Sell;
		
	}

	@Override
	public Iterable<Sell> getallSell() {
		Iterable<Sell> listSell = SellRepo.findAll();
		return listSell;
	}
	
	



}

