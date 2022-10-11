package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Arbitrator;

public interface IArbitratorService {
	
	 void addArbitrator(Arbitrator  Arbitrator);

	 void deleteArbitrator(int id);

	 Arbitrator updateArbitrator(Arbitrator  Arbitrator);
	 
	 Optional<Arbitrator> getArbitratorById(int id);
	 
	 Iterable<Arbitrator> getallArbitrator();


}
