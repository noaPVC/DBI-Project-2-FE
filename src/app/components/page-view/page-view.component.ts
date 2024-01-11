import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { QuestionComponent } from '../question/question.component';
import { QuestionDto } from '../../models/models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-view',
  standalone: true,
  templateUrl: './page-view.component.html',
  styleUrl: './page-view.component.scss',

  // used components in-page-view.component.ts
  imports: [
    CommonModule,
    QuestionComponent
  ]
})
export class PageViewComponent implements OnInit {

  questions$: Observable<QuestionDto[]> = this.dataService.getQuestions()

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
