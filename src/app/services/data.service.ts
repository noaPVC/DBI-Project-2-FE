import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionDto } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getQuestions(query: QuestionQuery): Observable<QuestionDto[]> {
    return this.http.get<QuestionDto[]>(`${this.BASE_URL}/api/questions?date=${query.date}&searchTerm=${query.searchTerm}`)
  }

}

export interface QuestionQuery {
  date: Date
  searchTerm: string
}