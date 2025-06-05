// src/app/room.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Vote {
  userId: string;
  roomId: number;
  roomName: string;
  storyId: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  roomservice(itemId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/room-details/${itemId}`);
  }

  submitVote(vote: Vote): Observable<any> {
    return this.http.post(`${this.baseUrl}/votes/submit`, vote, { responseType: 'text' });
  }

  getAllVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(`${this.baseUrl}/votes/results`);
  }

  clearVotes(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/votes/clear`);
  }
}
