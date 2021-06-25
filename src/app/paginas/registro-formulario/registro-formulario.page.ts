import { Component, OnInit } from '@angular/core';

//importar servicio
import { FormularioService } from '../../servicios/formulario.service'

export class EnviarDatos{
  constructor(
    public id: string,
    public nombre: string,
    public apellido: string,
    public rut: string,
    public correo: string,
    public password: string,
  ){}
}

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.page.html',
  styleUrls: ['./registro-formulario.page.scss'],
})
export class RegistroFormularioPage implements OnInit {

  datos_formulario;

  constructor(private formularioService: FormularioService) {
    this.datos_formulario = new EnviarDatos("dato 1", "dato 2", "dato 3", "dato 4", "dato 5", "dato 6");
  }

  ngOnInit() {
  }

  enviarDatos() {
    this.formularioService.registrarFormulario(this.datos_formulario).subscribe(
      (response:any)=>{
        if(response.registro){
          alert("datos registrados correctamente")
        }else{
          alert("Datos NO registrados")
        }
      },
      error=>{
        alert("error en registrar datos")
      }
    )
    console.log("Datos del formulario: ", this.datos_formulario);
  }

//  obtenerFormulario(){
//    return this.http.get(`${this.backend}/obtener-registros`); }

}
