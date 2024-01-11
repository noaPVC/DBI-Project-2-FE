import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionMongoFE } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getQuestions(query?: QuestionQuery): Observable<QuestionMongoFE[]> {
    // return this.http.get<QuestionDto[]>(`${this.BASE_URL}/api/questions?date=${query.date}&searchTerm=${query.searchTerm}`)
    return new Observable<QuestionMongoFE[]>(observer => {
      observer.next([])
      observer.complete()
    })
  }

}

export interface QuestionQuery {
  date: Date
  searchTerm: string
}