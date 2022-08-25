package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Tournois;
import yoseikanbdo.Repositories.TournoisRepository;

@Service
public class TournoisServiceImp implements ITournoisService {
	
	@Autowired	
    TournoisRepository TournoisRepo;
	
	

	@Override
	public void addTournois(Tournois prdct) {	
		  TournoisRepo.save(prdct);
	}

	@Override
	public void deleteTournois(int id) {
		// TODO Auto-generated method stub
		TournoisRepo.deleteById(id);
		
	}

	@Override
	public Tournois updateTournois(Tournois Tournois) {
		// TODO Auto-generated method stub
		     //Tournois = TournoisRepo.findById(id).orElse(null);
		return TournoisRepo.save(Tournois);
	}

	@Override
	public Optional<Tournois> getTournoisById(int id) {
		Optional<Tournois> Tournois = TournoisRepo.findById(id);
	return Tournois;
		
	}

	@Override
	public Iterable<Tournois> getallTournois() {
		Iterable<Tournois> listTournois = TournoisRepo.findAll();
		return listTournois;
	}
	

}
