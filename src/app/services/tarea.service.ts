import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { TipoTarea } from '../models/tipo_tarea';
import { TareaAsunto } from '../models/tarea_asunto';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas:Tarea[]=[];
  private tipos:TipoTarea[]=[];
  private asuntos:TareaAsunto[]=[];
  
  constructor() { 

    this.tareas =[];
    this.tipos =[
      {id:0,
      que: "Nada importante"},
      {id:1,
      que: "Poco importante"},
      {id:2,
      que: "Importante"},
      {id:3,
      que: "Muy importante"},
      {id:4,
      que: "De vida o muerte"}
    ];  

     this.asuntos =[
      {id:0,
      asunto: "Personal"},
      {id:1,
      asunto: "Académico"},
      {id:2,
      asunto: "Laboral"},
      {id:3,
      asunto: "Otro"}
    ]; 
  }


  // metodo q reotrna el arrgelo de clientes
  getTareas(){
    return this.tareas;
  }

  getTipos(){
    return this.tipos;
  }

  
  getAsuntos(){
    return this.asuntos;
  }

  agregarTarea(tarea:Tarea){
    this.tareas.push(tarea);
  }

  nuevaTarea():Tarea{
    return{
      id: this.tareas.length+1,
      titulo: '',
      asunto: 0,
      desc: '',
      fecha: '',
      urgencia: 0
  }
  }
}
