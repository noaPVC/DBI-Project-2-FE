import { Component, Input } from '@angular/core';
import { QuestionDto } from '../../models/models';
import { CommonModule } from '@angular/common';

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

  @Input() question: QuestionDto | null = null

}
