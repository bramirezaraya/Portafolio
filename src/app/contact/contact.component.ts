import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  myForm: FormGroup;


  constructor(private fb:FormBuilder) { 
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', Validators.compose([
        Validators.email, Validators.required])],
      textArea: ['', Validators.compose([
        Validators.minLength(10), Validators.required])]
    })
  }

  ngOnInit(): void {
  }

  alerta(){
    Swal.fire(
      'Se envio correctamente!',
      'Gracias por enviar tu informacion',
      'success'
    )
    this.myForm.reset();
  }
}
