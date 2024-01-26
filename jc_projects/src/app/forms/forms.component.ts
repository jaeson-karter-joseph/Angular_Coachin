import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ButtonModule, CardModule, FormsModule, InputTextModule, ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

  form !: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      Username: new FormControl<string | null>('', [Validators.required, Validators.minLength(4)]),
      Email: new FormControl<string | null>('', [Validators.required, Validators.email]),

    })

  }

  onSubmit() {
    console.log(this.form.value)
  }

}
