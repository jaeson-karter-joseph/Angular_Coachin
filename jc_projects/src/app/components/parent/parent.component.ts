import { Component, EventEmitter, Output } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {

  array: number[] = []

  onSubmit(value: string) {
    this.array.push(Number(value));
  }
}
