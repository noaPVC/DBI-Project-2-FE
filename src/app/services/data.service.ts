import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedByMongoFE, QuestionMongoFE, QuestionTagMongoFE } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'https://localhost:7084'

  constructor(private http: HttpClient) { }

  public getQuestions(query?: QuestionQuery): Observable<QuestionMongoFE[]> {
    let params = new HttpParams()
  
    if (query) {
      if (query.from) {
        const fromDate = new Date(query.from)
        params = params.set('from', fromDate.toISOString());
      }
  
      if (query.till) {
        const tillDate = new Date(query.till)
        params = params.set('till', tillDate.toISOString())
      }
  
      if (query.searchTerm) params = params.set('searchTerm', query.searchTerm)
      if (query.tagId) params = params.set('tagId', query.tagId)
      if (query.userId) params = params.set('userId', query.userId)
    }
    
    return this.http.get<QuestionMongoFE[]>(`${this.BASE_URL}/api/questions`, { params })
  }
  
  getTags(): Observable<QuestionTagMongoFE[]> {
    return this.http.get<QuestionTagMongoFE[]>(`${this.BASE_URL}/api/questions/tags`)
  }

  getUsers(): Observable<CreatedByMongoFE[]> {
    return this.http.get<CreatedByMongoFE[]>(`${this.BASE_URL}/api/questions/users`)
  }

}

export interface QuestionQuery {
  from: string
  till: string
  searchTerm: string
  tagId: string
  userId: string
}