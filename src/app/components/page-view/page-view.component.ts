import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-page-view',
  standalone: true,
  templateUrl: './page-view.component.html',
  styleUrl: './page-view.component.scss'
})
export class PageViewComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
