package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Tournois;

public interface ITournoisService {

	 void addTournois(Tournois  Tournois);

	 void deleteTournois(int id);

	 Tournois updateTournois(Tournois  Tournois);
	 
	 Optional<Tournois> getTournoisById(int id);
	 
	 Iterable<Tournois> getallTournois();
}
