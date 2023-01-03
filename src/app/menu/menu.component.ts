import { Component, OnInit } from '@angular/core';
import { Plato } from '../compartido/plato';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  platos: Plato[]= [
    {
      id: '0',
      nombre: 'Pincho Marlenys',
      image: '/assets/images/pincho.png',
      categoria: 'Carnes',
      destacado: true,
      etiqueta: 'Hot',
      precio: '35.000',      
      descripcion: 'Una combinación única del picho de la casa, lomito fino, pechugas cubierta con a aderezo especial Marlenys, papas a la francesa, tomates cherry maduros en rama, cebolla Vidalia, guindillas Guntur y Buffalo Paneer.'
    },
    {
      id: '1',
      nombre: 'Hamburguesa Especial',
      image: '/assets/images/hamburguesa.png',
      categoria: 'Comidas Rapidas',
      destacado: false,
      etiqueta: '',
      precio: '29.000',
      descripcion: 'Hamburguesa de la casa carne premium de 200 grs con queso cheddar fritos rebozados con salsa especial de la casa acompañada papas a la francesa.'
    },
    {
      id: '2',
      nombre: 'Arroz con Pollo',
      image: '/assets/images/arroz_pollo.png',
      categoria: 'Almuerzos',
      destacado: false,
      etiqueta: 'Nuevo',
      precio: '25.000',
      descripcion: 'Una nueva experiencia de sabores Marlenys un almuerzo por excelencia, Ven y prueba vive la mejor de nuestro delicioso arroz.'
    },
    {
      id: '3',
      nombre: 'Pancakes',
      image: '/assets/images/pancakes.png',
      categoria: 'Tortas',
      destacado: false,
      etiqueta: '',
      precio: '18.000',
      descripcion: 'Una deliciosa tarta de queso semidulce al estilo neoyorquino, con corteza de galleta Graham y especiada con arandanos.'
    }
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
