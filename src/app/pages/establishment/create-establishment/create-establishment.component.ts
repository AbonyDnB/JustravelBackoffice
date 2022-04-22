import { Component, OnInit } from '@angular/core';
import { Establishment } from '../interface/establishment.interface';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
//TAGS
import { ElementRef, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-create-establishment',
  templateUrl: './create-establishment.component.html',
  styleUrls: ['./create-establishment.component.scss'],
})
export class CreateEstablishmentComponent implements OnInit {
  establishmentForm!: FormGroup;
  establecimiento_activo!: string;
  isActive: string[] = ['activo', 'inactivo'];
  check_recomended!: false;
  // control de textareas descripciones
  textES: boolean = true;
  textEN: boolean = false;
  textDE: boolean = false;

  // Reactive form builder
  constructor(private fb: FormBuilder, private establishmentService: EstablishmentService) {
    // ---- Tags filter ----
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.allTags.slice())),
    );
  }

  formBuilder() {
    this.establishmentForm = this.fb.group({
      nombre: ['', Validators.required],
      precioSinPase:['', Validators.required],
      descripcionES:['', Validators.required],
      descripcionEN:['', Validators.required],
      descripcionDE:['', Validators.required],
      radioActive:['', Validators.required],
      recommended:false,
      tags:this.tags,
      aperturaLunes: '00:00',
      aperturaMartes: '00:00',
      aperturaMiercoles: '00:00',
      aperturaJueves: '00:00',
      aperturaViernes: '00:00',
      aperturaSabado: '00:00',
      aperturaDomingo: '00:00',
      cierreLunes: '00:00',
      cierreMartes: '00:00',
      cierreMiercoles: '00:00',
      cierreJueves: '00:00',
      cierreViernes: '00:00',
      cierreSabado: '00:00',
      cierreDomingo: '00:00',
      // ------------- INFORMACION FACTURACION -------------
      cf:['', Validators.required],
      razonSocial:['', Validators.required],
      tlf:['', Validators.required],
      localidad:['', Validators.required],
      calle:['', Validators.required],
      numeroCalle:['', Validators.required],
      cPostal:['', Validators.required],
      email:['', Validators.required],
      iban:['', Validators.required],
      // ------------- INFORMACION PARA EL CLIENTE -------------
      localidadCliente:['', Validators.required],
      cpCliente:['', Validators.required],
      calleCliente:['', Validators.required],
      nCalleCliente:['', Validators.required],
      comunidadCliente:['', Validators.required],
      tlfCliente:['', Validators.required],
      emailCliente:['', Validators.required],
      latitudCliente:['', Validators.required],
      longitudCliente:['', Validators.required],

    })
  }

  createEstablishment() {
    const establishment: Establishment = {
      // ------------- DATOS GENERALES -------------
      nombre: this.establishmentForm.value.nombre,
      tags: this.establishmentForm.value.tags,
      recommended: this.establishmentForm.value.recommended,
      radioActive: this.establishmentForm.value.radioActive,
      precioSinPase:this.establishmentForm.value.precioSinPase,
      descripcionES:this.establishmentForm.value.descripcionES,
      descripcionEN:this.establishmentForm.value.descripcionEN,
      descripcionDE:this.establishmentForm.value.descripcionDE,
      aperturaLunes: this.establishmentForm.value.aperturaLunes,
      aperturaMartes: this.establishmentForm.value.aperturaMartes,
      aperturaMiercoles: this.establishmentForm.value.aperturaMiercoles,
      aperturaJueves:this.establishmentForm.value.aperturaJueves,
      aperturaViernes:this.establishmentForm.value.aperturaViernes,
      aperturaSabado:this.establishmentForm.value.aperturaSabado,
      aperturaDomingo:this.establishmentForm.value.aperturaDomingo,
      cierreLunes:this.establishmentForm.value.cierreLunes,
      cierreMartes:this.establishmentForm.value.cierreMartes,
      cierreMiercoles:this.establishmentForm.value.cierreMiercoles,
      cierreJueves:this.establishmentForm.value.cierreJueves,
      cierreViernes:this.establishmentForm.value.cierreViernes,
      cierreSabado:this.establishmentForm.value.cierreSabado,
      cierreDomingo:this.establishmentForm.value.cierreDomingo,
      // ------------- INFORMACION FACTURACION -------------
      cf:this.establishmentForm.value.cf,
      razonSocial:this.establishmentForm.value.razonSocial,
      tlf:this.establishmentForm.value.tlf,
      localidad:this.establishmentForm.value.localidad,
      calle:this.establishmentForm.value.calle,
      numeroCalle:this.establishmentForm.value.numeroCalle,
      cPostal:this.establishmentForm.value.cPostal,
      email:this.establishmentForm.value.email,
      iban:this.establishmentForm.value.iban,
      // ------------- INFORMACION PARA EL CLIENTE -------------
      localidadCliente:this.establishmentForm.value.localidadCliente,
      cpCliente:this.establishmentForm.value.cpCliente,
      calleCliente:this.establishmentForm.value.calleCliente,
      nCalleCliente:this.establishmentForm.value.nCalleCliente,
      comunidadCliente:this.establishmentForm.value.comunidadCliente,
      tlfCliente:this.establishmentForm.value.tlfCliente,
      emailCliente:this.establishmentForm.value.emailCliente,
      latitudCliente:this.establishmentForm.value.latitudCliente,
      longitudCliente:this.establishmentForm.value.longitudCliente
    };

    console.log(this.establishmentForm.value)
    // this.establishmentService.createEstablishment(establishment)
    // .subscribe(resp => console.log(resp))
  }

  ngOnInit(){
    this.formBuilder();
  }

    // --------------------- MOSTRAR TEXTAREA DE DESCRIPCIONES SEGÚN EL BTN CLICADO ---------------------

    textESFunction(){
      this.textES=true;
      this.textEN=false;
      this.textDE=false
  }

  textENFunction(){
      this.textEN=true;
      this.textES=false;
      this.textDE=false
  }

  textDEFunction(){
      this.textDE=true;
      this.textEN=false;
      this.textES=false
  }
  // --------------------- AÑADE O ELIMINA TAGS ---------------------

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = ['Comida americana', 'Restaurante de carne'];
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }
}
