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
  T: string[] = [];

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
      tags:this.tagCtrl,

      aperturaMañanaLunes: '',
      cierreMañanaLunes: '',
      aperturaTardeLunes: '',
      cierreTardeLunes: '',

      aperturaMañanaMartes: '',
      cierreMañanaMartes: '',
      aperturaTardeMartes: '',
      cierreTardeMartes: '',

      aperturaMañanaMiercoles: '',
      cierreMañanaMiercoles: '',
      aperturaTardeMiercoles: '',
      cierreTardeMiercoles: '',

      aperturaMañanaJueves: '',
      cierreMañanaJueves: '',
      aperturaTardeJueves: '',
      cierreTardeJueves: '',

      aperturaMañanaViernes: '',
      cierreMañanaViernes: '',
      aperturaTardeViernes: '',
      cierreTardeViernes: '',

      aperturaMañanaSabado: '',
      cierreMañanaSabado: '',
      aperturaTardeSabado: '',
      cierreTardeSabado: '',

      aperturaMañanaDomingo: '',
      cierreMañanaDomingo: '',
      aperturaTardeDomingo: '',
      cierreTardeDomingo: '',

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
      // ------------- HORARIOS -------------
      aperturaMañanaLunes: this.establishmentForm.value.aperturaMañanaLunes,
      cierreMañanaLunes: this.establishmentForm.value.cierreMañanaLunes,
      aperturaTardeLunes: this.establishmentForm.value.aperturaTardeLunes,
      cierreTardeLunes: this.establishmentForm.value.cierreTardeLunes,

      aperturaMañanaMartes: this.establishmentForm.value.aperturaMañanaMartes,
      cierreMañanaMartes: this.establishmentForm.value.cierreMañanaMartes,
      aperturaTardeMartes: this.establishmentForm.value.aperturaTardeMartes,
      cierreTardeMartes: this.establishmentForm.value.cierreTardeMartes,

      aperturaMañanaMiercoles: this.establishmentForm.value.aperturaMañanaMiercoles,
      cierreMañanaMiercoles: this.establishmentForm.value.cierreMañanaMiercoles,
      aperturaTardeMiercoles: this.establishmentForm.value.aperturaTardeMiercoles,
      cierreTardeMiercoles: this.establishmentForm.value.cierreTardeMiercoles,

      aperturaMañanaJueves: this.establishmentForm.value.aperturaMañanaJueves,
      cierreMañanaJueves: this.establishmentForm.value.cierreMañanaJueves,
      aperturaTardeJueves: this.establishmentForm.value.aperturaTardeJueves,
      cierreTardeJueves: this.establishmentForm.value.cierreTardeJueves,

      aperturaMañanaViernes: this.establishmentForm.value.aperturaMañanaViernes,
      cierreMañanaViernes: this.establishmentForm.value.cierreMañanaViernes,
      aperturaTardeViernes: this.establishmentForm.value.aperturaTardeViernes,
      cierreTardeViernes: this.establishmentForm.value.cierreTardeViernes,

      aperturaMañanaSabado: this.establishmentForm.value.aperturaMañanaSabado,
      cierreMañanaSabado: this.establishmentForm.value.cierreMañanaSabado,
      aperturaTardeSabado: this.establishmentForm.value.aperturaTardeSabado,
      cierreTardeSabado: this.establishmentForm.value.cierreTardeSabado,

      aperturaMañanaDomingo: this.establishmentForm.value.aperturaMañanaDomingo,
      cierreMañanaDomingo: this.establishmentForm.value.cierreMañanaDomingo,
      aperturaTardeDomingo: this.establishmentForm.value.aperturaTardeDomingo,
      cierreTardeDomingo: this.establishmentForm.value.cierreTardeDomingo,
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
  allTags: string[] = ['Comida americana', 'Restaurante de carne','Comida mexicana','Bebidas','Test'];
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  onTagRemoved(cat: string) {
    const tags = this.tagCtrl.value as string[];
    this.removeFirst(tags, cat);
    this.tagCtrl.setValue(tags); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }
}
