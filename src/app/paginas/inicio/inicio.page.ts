import { Component, OnInit } from '@angular/core';

interface Componente {
  icono: string;
  nombre: string;
  direccion: string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente [] = [
    {
      icono: 'clipboard-outline',
      nombre: "Registro",
      direccion: "/registro",
    },
    {
      icono: 'person-circle-outline',
      nombre: "Login",
      direccion: "/login",
    },
    {
      icono: 'wallet-outline',
      nombre: "Registro Formulario",
      direccion: "/registro-formulario",
    },
    {
      icono: 'person-outline',
      nombre: "Egreso Usuario",
      direccion: "/egreso-usuario",
    },
    {
      icono: 'person-add-outline',
      nombre: "Crear Egreso",
      direccion: "/crear-egreso",
    },
    {
      icono: 'id-card-outline',
      nombre: "Listar Egreso",
      direccion: "/listar-egreso",
    },
  ]

  
  constructor() { }

  ngOnInit() {
  }

}
