const HORAS_SEMANALES = 168;

export enum TipoPersona {
   JOVEN,
   EMPLEADO,
   DESEMPLEADO
}

export class Cuidador{
   
   constructor(
      public horasOcupadas: Array<boolean> = new Array(HORAS_SEMANALES).fill(false),
      private _tipo : TipoPersona,
      public horasCuidado : number
   ){}

   public get tipo() {
      return this._tipo;
   }
}