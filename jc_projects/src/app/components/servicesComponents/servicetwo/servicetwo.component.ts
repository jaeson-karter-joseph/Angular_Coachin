import { Component } from '@angular/core';
import { ExmapleService } from '../exmaple.service';

@Component({
  selector: 'app-servicetwo',
  standalone: true,
  imports: [],
  templateUrl: './servicetwo.component.html',
  styleUrl: './servicetwo.component.scss'
})
export class ServicetwoComponent {
  data: string = "";

  constructor(private exmaple: ExmapleService) {
    this.data = exmaple.date;
  }

}
