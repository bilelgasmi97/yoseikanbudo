package yoseikanbdo.Services;

import java.util.Optional;

import yoseikanbdo.Models.Player;



public interface IPlayerService {
	
	 void addPlayer(Player  Player);

	 void deletePlayer(int id);

	 Player updatePlayer(Player  Player);
	 
	 Optional<Player> getPlayerById(int id);
	 
	 Iterable<Player> getallPlayer();

}
