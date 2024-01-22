import { Component } from '@angular/core';
import { ExmapleService } from '../exmaple.service';


@Component({
  selector: 'app-service-one',
  standalone: true,
  imports: [],
  templateUrl: './service-one.component.html',
  styleUrl: './service-one.component.scss'
})
export class ServiceOneComponent {

  data: string = "";

  constructor(private exampleService: ExmapleService) {
    this.data = exampleService.date;
  }

}
