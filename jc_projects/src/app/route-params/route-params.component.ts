import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-params',
  standalone: true,
  imports: [],
  templateUrl: './route-params.component.html',
  styleUrl: './route-params.component.scss'
})
export class RouteParamsComponent implements OnInit {
  @Input() data1? = '';
  @Input() data2? = '';

  ngOnInit(): void {
    console.log(this.data1, this.data2)
  }



}
