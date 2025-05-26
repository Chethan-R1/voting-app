import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) {}

  
  roomservice(itemId: string) {
    return this.http.get(`http://localhost:8080/api/room-details/${itemId}`);
  }
}
