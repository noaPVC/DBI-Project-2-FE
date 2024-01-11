import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionDto } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'http://localhost:3000'

  HARD_CODED_QUESTION_DATA: QuestionDto[] = [
    {
      _id: { $oid: '1' },
      questionId: 1,
      questionIdAccess: { $binary: { base64: 'abc123' } },
      title: 'How to iterate over an array in JavaScript?',
      description: 'I have an array of elements in JavaScript, and I want to iterate over each element. What is the best way to achieve this?',
      correctAnswerId: 1,
      correctAnswer: null,
      tags: [
        {
          _id: { $oid: '101' },
          tagId: 101,
          name: 'JavaScript',
          questions: [],
        },
      ],
      answers: [
        {
          _id: { $oid: '201' },
          answerId: 201,
          question: null!,
          questionId: 1,
          correctAnswerQuestion: null,
          correctAnswerQuestionId: null,
          title: 'You can use a for loop or forEach method.',
          description: 'In JavaScript, you can iterate over an array using a for loop or the forEach method. Here is an example...',
        },
        {
          _id: { $oid: '202' },
          answerId: 202,
          question: null!,
          questionId: 1,
          correctAnswerQuestion: null,
          correctAnswerQuestionId: null,
          title: 'The best way is to use the forEach method.',
          description: 'The forEach method is more concise and readable when iterating over arrays in JavaScript. Here is how you can use it...',
        },
        // Add more answer options as needed
      ],
    },
    {
      _id: { $oid: '2' },
      questionId: 2,
      questionIdAccess: { $binary: { base64: 'def456' } },
      title: 'How to create a RESTful API in Node.js?',
      description: 'I want to build a RESTful API using Node.js. What are the steps involved, and are there any recommended frameworks or libraries?',
      correctAnswerId: 5,
      correctAnswer: null,
      tags: [
        {
          _id: { $oid: '102' },
          tagId: 102,
          name: 'Node.js',
          questions: [],
        },
        {
          _id: { $oid: '103' },
          tagId: 103,
          name: 'REST',
          questions: [],
        },
      ],
      answers: [
        {
          _id: { $oid: '203' },
          answerId: 203,
          question: null!,
          questionId: 2,
          correctAnswerQuestion: null,
          correctAnswerQuestionId: null,
          title: 'You can use Express.js to create a RESTful API in Node.js.',
          description: 'Express.js is a popular and lightweight framework for building web applications and APIs in Node.js. Here is a simple example...',
        },
        {
          _id: { $oid: '204' },
          answerId: 204,
          question: null!,
          questionId: 2,
          correctAnswerQuestion: null,
          correctAnswerQuestionId: null,
          title: 'Consider using Restify for building RESTful APIs.',
          description: 'Restify is designed specifically for building RESTful APIs and can be a good choice for your Node.js project...',
        },
        // Add more answer options as needed
      ],
    },
    {
      _id: { $oid: '3' },
      questionId: 3,
      questionIdAccess: { $binary: { base64: 'ghi789' } },
      title: 'How to handle asynchronous operations in Python?',
      description: 'I am working on a Python project that involves asynchronous operations. What are the best practices for handling asynchronous code in Python?',
      correctAnswerId: 8,
      correctAnswer: null,
      tags: [
        {
          _id: { $oid: '104' },
          tagId: 104,
          name: 'Python',
          questions: [],
        },
        {
          _id: { $oid: '105' },
          tagId: 105,
          name: 'Asynchronous Programming',
          questions: [],
        },
      ],
      answers: [
        {
          _id: { $oid: '205' },
          answerId: 205,
          question: null!,
          questionId: 3,
          correctAnswerQuestion: null,
          correctAnswerQuestionId: null,
          title: 'You can use async/await syntax for handling asynchronous operations.',
          description: 'Async/await is a powerful feature in Python that allows you to write asynchronous code in a synchronous style. Here is an example...',
        },
        {
          _id: { $oid: '206' },
          answerId: 206,
          question: null!,
          questionId: 3,
          correctAnswerQuestion: null,
          correctAnswerQuestionId: null,
          title: 'Consider using the asyncio library for more advanced asynchronous programming.',
          description: 'The asyncio library provides a set of high-level APIs for writing concurrent code using the async/await syntax. Here is how you can use it...',
        },
        // Add more answer options as needed
      ],
    },
    // Add more questions as needed
  ]

  constructor(private http: HttpClient) { }

  public getQuestions(query?: QuestionQuery): Observable<QuestionDto[]> {
    // return this.http.get<QuestionDto[]>(`${this.BASE_URL}/api/questions?date=${query.date}&searchTerm=${query.searchTerm}`)
    return new Observable<QuestionDto[]>(observer => {
      observer.next(this.HARD_CODED_QUESTION_DATA)
      observer.complete()
    })
  }

}

export interface QuestionQuery {
  date: Date
  searchTerm: string
}