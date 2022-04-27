import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {
  isActiveComida: string[] = ['activo', 'inactivo'];
  requiereReserva: string[] = ['no', 'por telefono'];
  establishments: string[] = ['Dakota Tex Mex', 'Can Pescador'];
  // control de textareas descripciones
  textES: boolean = true;
  textEN: boolean = false;
  textDE: boolean = false;

  // --------------------- MOSTRAR TEXTAREA DE DESCRIPCIONES SEGÚN EL BTN CLICADO ---------------------

  textESFunction() {
    this.textES = true;
    this.textEN = false;
    this.textDE = false
  }

  textENFunction() {
    this.textEN = true;
    this.textES = false;
    this.textDE = false
  }

  textDEFunction() {
    this.textDE = true;
    this.textEN = false;
    this.textES = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
