import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService, QuestionQuery } from '../../services/data.service';
import { QuestionComponent } from '../question/question.component';
import { Observable, Subject, debounceTime, takeUntil } from 'rxjs';
import { CreatedByMongoFE, QuestionMongoFE, QuestionTagMongoFE } from '../../models/models';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
export class PageViewComponent implements OnInit, OnDestroy {

  questions$: Observable<QuestionMongoFE[]> = this.dataService.getQuestions()

  readonly tags$: Observable<QuestionTagMongoFE[]> = this.dataService.getTags()
  readonly users$: Observable<CreatedByMongoFE[]> = this.dataService.getUsers()

  readonly _unsubscribe$ = new Subject<void>()

  filterFormGroup = new FormGroup({
    from: new FormControl<string | null>(null),
    till: new FormControl<string | null>(null),
    searchTerm: new FormControl<string>('', Validators.required),
    userId: new FormControl<string | null>(null),
    tagId: new FormControl<string | null>(null)
  })

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.filterFormGroup.valueChanges
      .pipe(
        takeUntil(this._unsubscribe$),
        debounceTime(500))
      .subscribe(value => {
        console.clear()
        console.log(value)

        this.questions$ = this.dataService.getQuestions(this.mapToQuestionQuery())
      })
  }

  mapToQuestionQuery(): QuestionQuery {
    return {
      from: this.filterFormGroup.controls.from.value!,
      till: this.filterFormGroup.controls.till.value!,
      searchTerm: this.filterFormGroup.controls.searchTerm.value!!,
      userId: this.filterFormGroup.controls.userId.value!,
      tagId: this.filterFormGroup.controls.tagId.value!
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next()
    this._unsubscribe$.complete()
  }

}
