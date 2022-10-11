package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Galerie;

public interface IGalerieService {
	
	 void addGalerie(Galerie  Galerie);

	 void deleteGalerie(int id);

	 Galerie updateGalerie(Galerie  Galerie);
	 
	 Optional<Galerie> getGalerieById(int id);
	 
	 Iterable<Galerie> getallGalerie();

}
