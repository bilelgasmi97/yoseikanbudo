package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Galerie;
import yoseikanbdo.Repositories.GalerieRepository;

@Service
public class GalerieServiceImp implements IGalerieService {
	
	@Autowired	
    GalerieRepository GalerieRepo;
	
	

	@Override
	public void addGalerie(Galerie prdct) {	
		  GalerieRepo.save(prdct);
	}

	@Override
	public void deleteGalerie(int id) {
		// TODO Auto-generated method stub
		GalerieRepo.deleteById(id);
		
	}

	@Override
	public Galerie updateGalerie(Galerie Galerie) {
		// TODO Auto-generated method stub
		     //Galerie = GalerieRepo.findById(id).orElse(null);
		return GalerieRepo.save(Galerie);
	}

	@Override
	public Optional<Galerie> getGalerieById(int id) {
		Optional<Galerie> Galerie = GalerieRepo.findById(id);
	return Galerie;
		
	}

	@Override
	public Iterable<Galerie> getallGalerie() {
		Iterable<Galerie> listGalerie = GalerieRepo.findAll();
		return listGalerie;
	}
	
	



}


