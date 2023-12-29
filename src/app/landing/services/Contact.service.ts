import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:8000';

  constructor(private _http: HttpClient) {}

  public addContact(contact: Contact): Observable<Contact> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this._http.post<Contact>(
      `${this.apiUrl}/api/v1/sendContactForm`,
      contact,
      { headers }
    );
  }
}
