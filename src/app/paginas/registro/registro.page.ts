import { Component, OnInit } from '@angular/core';
//importar el servicio
import { FormularioService } from '../../servicios/formulario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor() { 
//    this.obtenerDatosFormulario();
  }

  ngOnInit() {
  }
  
// ionViewWillEnter(){
//   this.obtenerDatosFormulario();
//  }
//  obtenerDatosFormulario(){
//    this.formularioService.obtenerFormulario().subscribe(
//      (response:any)=>{
//        this.datos_obtenidos = response.registros;
//      },
//      error=>{
//        alert("error en la peticion")
//      }
//    )
//  }

}
