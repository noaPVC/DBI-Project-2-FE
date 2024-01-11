import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { QuestionComponent } from '../question/question.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { QuestionMongoFE } from '../../models/models';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-view',
  standalone: true,
  templateUrl: './page-view.component.html',
  styleUrl: './page-view.component.scss',

  // used components in-page-view.component.ts
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuestionComponent
  ]
})
export class PageViewComponent implements OnInit {

  readonly questions$: Observable<QuestionMongoFE[]> = this.dataService.getQuestions()

  filterFormGroup = new FormGroup({
    date: new FormControl<Date | null>(new Date()),
    searchTerm: new FormControl<string>('', { nonNullable: true })
  })

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
