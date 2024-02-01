import { Component, inject } from '@angular/core';
import { BsTwoViewComponent } from '../bs-two-view/bs-two-view.component';
import { ProjectExampleService } from '../../services/project-example.service';

@Component({
  selector: 'app-bs-one-view',
  standalone: true,
  imports: [BsTwoViewComponent],
  templateUrl: './bs-one-view.component.html',
  styleUrl: './bs-one-view.component.scss',
})
export class BsOneViewComponent {
  constructor(private service: ProjectExampleService) {
  }

  onSubmit() {
    this.service.changeValue('Hello from BsOneViewComponent');
  }

}
