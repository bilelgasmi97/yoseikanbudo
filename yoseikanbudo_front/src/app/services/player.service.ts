import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http : HttpClient) { }

  addPlayers(player : Player) : Observable<Player> {
    return this.http.post<Player>("http://localhost:8089/player/new",player);
  }

   getPlayers() :Observable<Player[]>  {
    return this.http.get<Player[]>("http://localhost:8089/player/all" );
  }

     updatePlayers(data : Player) : Observable<Player>{
    return this.http.put<Player>("http://localhost:8089/player/update",data);
  } 

  deletePlayers(id : number)  : Observable<Player>{
    return this.http.delete<Player>("http://localhost:8089/player/delete/"+id );
  } 
}
