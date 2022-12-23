export class Todo {
  static fromJSON({tarea, id, creado, completado}) {
    const temp = new Todo(tarea);
    temp.id         = id;
    temp.creado     = creado;
    temp.completado = completado;

    return temp;
  }


  constructor(tarea) {
    this.tarea  = tarea;
    
    this.id     = new Date().getTime();
    this.creado = new Date();
    this.completado = false;
  }
}
