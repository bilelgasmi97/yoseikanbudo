package yoseikanbdo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yoseikanbdo.Models.Player;
import yoseikanbdo.Repositories.PlayerRepository;

@Service
public class PlayerServiceImp implements IPlayerService {
	
	@Autowired	
    PlayerRepository PlayerRepo;
	
	

	@Override
	public void addPlayer(Player prdct) {	
		  PlayerRepo.save(prdct);
	}

	@Override
	public void deletePlayer(int id) {
		// TODO Auto-generated method stub
		PlayerRepo.deleteById(id);
		
	}

	@Override
	public Player updatePlayer(Player Player) {
		// TODO Auto-generated method stub
		     //Player = PlayerRepo.findById(id).orElse(null);
		return PlayerRepo.save(Player);
	}

	@Override
	public Optional<Player> getPlayerById(int id) {
		Optional<Player> Player = PlayerRepo.findById(id);
	return Player;
		
	}

	@Override
	public Iterable<Player> getallPlayer() {
		Iterable<Player> listPlayer = PlayerRepo.findAll();
		return listPlayer;
	}
	
	



}

