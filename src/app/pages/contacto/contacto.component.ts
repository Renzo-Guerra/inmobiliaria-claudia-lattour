import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Directive } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  mailForm = this.form_builder.group({
    nombre: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    mensaje: ["", Validators.required],
  });
  
  constructor(private form_builder: FormBuilder){}

  onSubmit(): void{
    console.log("Se envió el form", this.mailForm.value, this.mailForm.invalid);
  }
}
