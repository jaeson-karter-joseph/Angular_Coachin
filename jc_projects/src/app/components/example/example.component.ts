import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReverseStringPipe } from '../../pipes/reverse-string.pipe';


@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, FormsModule, ReverseStringPipe],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
  title = 'Lets learn Custom pipes'
  date: Date = new Date();
}
