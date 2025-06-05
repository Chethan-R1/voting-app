import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Story {
  // planId: number;
  storyDesc: string;
  storyNo: string;
}

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private baseUrl = 'http://localhost:8080/api/story-details';

  constructor(private http: HttpClient) {}

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.baseUrl);
  }

  addStory(story: Story): Observable<Story> {
    return this.http.post<Story>(this.baseUrl, story);
  }

  getStoryById(planId: string): Observable<Story> {
    return this.http.get<Story>(`${this.baseUrl}/${planId}`);
  }
}
