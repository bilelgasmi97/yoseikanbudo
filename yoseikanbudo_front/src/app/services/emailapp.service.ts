import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDetails } from '../models/email-details';

@Injectable({
  providedIn: 'root'
})
export class EmailappService {

  constructor(private http : HttpClient) { 
    }

    sendSimpleMail(mail : EmailDetails) : Observable<EmailDetails> {
      return this.http.post<EmailDetails>("http://localhost:8089/sendMail",mail);
    }

    sendSimpleMailwithAttachment(mail : EmailDetails) : Observable<EmailDetails> {
      return this.http.post<EmailDetails>("http://localhost:8089/sendMailWithAttachmen",mail);
    }
  
}
