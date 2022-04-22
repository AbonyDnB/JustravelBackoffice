export interface Establishment {
    nombre:string,
    radioActive:string,
    recommended:boolean,
    precioSinPase:string,
    descripcionES:string,
    descripcionEN:string,
    descripcionDE:string,
    aperturaLunes: string,
    aperturaMartes: string,
    aperturaMiercoles: string,
    aperturaJueves:string,
    aperturaViernes:string,
    aperturaSabado:string,
    aperturaDomingo:string,
    cierreLunes:string,
    cierreMartes:string,
    cierreMiercoles:string,
    cierreJueves:string,
    cierreViernes:string,
    cierreSabado:string,
    cierreDomingo:string,
    tags: [],
    // ------------- INFORMACION FACTURACION -------------
    cf:string,
    razonSocial:string,
    tlf:string,
    localidad:string,
    calle:string,
    numeroCalle:string,
    cPostal:string,
    email:string,
    iban:string,
    // ------------- INFORMACION PARA EL CLIENTE -------------
    localidadCliente:string,
    cpCliente:string,
    calleCliente:string,
    nCalleCliente:string,
    comunidadCliente:string,
    tlfCliente:string,
    emailCliente:string,
    latitudCliente:string,
    longitudCliente:string,
}
