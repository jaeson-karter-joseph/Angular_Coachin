import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { getEnvironmentData } from 'worker_threads';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent {
  Data = '';
  isLoading = false;

  fetchData(): Observable<string> {
    return of("Data Fetched").pipe(delay(2000))
  }

  getdata() {
    this.isLoading = true;
    this.fetchData().subscribe({
      next: (data) => {
        this.Data = data;
        this.isLoading = false
      },
      error: (err) => {
        console.error(err);
      }
    })

  }

}
