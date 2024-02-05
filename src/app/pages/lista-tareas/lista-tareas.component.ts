import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  tareas:Tarea[]=[];

  constructor(private  tareaService:TareaService){
    this.tareas= this.tareaService.getTareas();
  }

   ngOnInit(): void {
     
   }
}