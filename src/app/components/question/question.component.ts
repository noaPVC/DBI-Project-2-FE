import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionMongoFE } from '../../models/models';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

  @Input() question: QuestionMongoFE | null = null

}
