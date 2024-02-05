import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TipoTarea } from '../../models/tipo_tarea';
import { TareaService } from '../../services/tarea.service';
import { TareaAsunto } from '../../models/tarea_asunto';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})
export class CrearTareaComponent {

  tarea!:Tarea;
  tipos: TipoTarea[]=[];
  asuntos: TareaAsunto[]=[];

  constructor(private tareaService:TareaService){}

  ngOnInit(): void {
    this.tarea = this.tareaService.nuevaTarea();
    this.tipos = this.tareaService.getTipos();
    this.asuntos= this.tareaService.getAsuntos();
  }

  insertarTarea(){
    this.tareaService.agregarTarea(this.tarea);
    this.tarea = this.tareaService.nuevaTarea();
  }
}

  
