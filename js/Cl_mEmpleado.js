export default class Cl_mEmpleado{
  constructor({ nombre,sexo}) {
    this.nombre = nombre;
    this.sexo= sexo;
  }
  set nombre(nombre){
    this._nombre=nombre;
  }
  get nombre(){
    return this._nombre;
  }
  set sexo(sexo){
    this._sexo= sexo.toUpperCase();
  }
  get sexo(){
    return this._sexo;
  }

  
}
