import { AddcompetitionComponent } from "../pages/competition/addcompetition/addcompetition.component"

export class ChatMsg {

    'id': number
    'reciver': String
    'sender': String = "Admin"
    'content': String
    'sendedAt' : Date  
    /* 'time': Date */
    constructor(reciver : String, content :String){
        this.reciver = reciver;
        this.content = content;
    }
}
