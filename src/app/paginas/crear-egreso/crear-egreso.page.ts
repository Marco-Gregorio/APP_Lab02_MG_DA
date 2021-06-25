import { Component, OnInit } from '@angular/core';

//importar servicio
import { FormularioService } from '../../servicios/formulario.service'

export class EnviarDatos{
  constructor(
    public id_egreso: string,
    public descripcion: string,
    public precio: string,
    public id_usuario: string,
  ){}
}
@Component({
  selector: 'app-crear-egreso',
  templateUrl: './crear-egreso.page.html',
  styleUrls: ['./crear-egreso.page.scss'],
})
export class CrearEgresoPage implements OnInit {
  datos_formulario;

  constructor() { 
    this.datos_formulario = new EnviarDatos("dato1","dato2","dato3","dato4")
  }

  ngOnInit() {
  }

  

}
