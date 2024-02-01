import { Component, OnInit, inject } from '@angular/core';
import { ProjectExampleService } from '../../services/project-example.service';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bs-two-view',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './bs-two-view.component.html',
  styleUrl: './bs-two-view.component.scss',
})
export class BsTwoViewComponent implements OnInit {
  behaviorSubjectValue !: string;
  subcription: Subscription = new Subscription();


  constructor(private service: ProjectExampleService) { }

  ngOnInit(): void {
    this.subcription = this.service.bhSubject$.subscribe({
      next: (value) => {
        this.behaviorSubjectValue = value;
        console.log('BsTwoViewComponent: ', value);
      }
    });
  }

}
