package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Arbitrator;
import yoseikanbdo.Repositories.ArbitratorRepository;

@Service
public class ArbitratorServiceImp implements IArbitratorService {
	
	@Autowired	
    ArbitratorRepository ArbitratorRepo;
	
	

	@Override
	public void addArbitrator(Arbitrator prdct) {	
		  ArbitratorRepo.save(prdct);
	}

	@Override
	public void deleteArbitrator(int id) {
		// TODO Auto-generated method stub
		ArbitratorRepo.deleteById(id);
		
	}

	@Override
	public Arbitrator updateArbitrator(Arbitrator Arbitrator) {
		// TODO Auto-generated method stub
		     //Arbitrator = ArbitratorRepo.findById(id).orElse(null);
		return ArbitratorRepo.save(Arbitrator);
	}

	@Override
	public Optional<Arbitrator> getArbitratorById(int id) {
		Optional<Arbitrator> Arbitrator = ArbitratorRepo.findById(id);
	return Arbitrator;
		
	}

	@Override
	public Iterable<Arbitrator> getallArbitrator() {
		Iterable<Arbitrator> listArbitrator = ArbitratorRepo.findAll();
		return listArbitrator;
	}
	
	



}

