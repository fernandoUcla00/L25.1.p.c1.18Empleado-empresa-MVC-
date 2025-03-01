import Cl_vEmpleado from "./Cl_vEmpleado.js";
import Cl_mvEmpleado from "./Cl_mEmpleado.js";
export default class Cl_vEmpresa{
  constructor() {
    this.controlador = null;
    this.salida=document.getElementById("salida");
    this.vEmpleado = new Cl_vEmpleado();
    this.vEmpleado.btProcesar.onclick = () => this.controlador.procesarEmpleado();
  }
  procesarEmpleado() {
    this.mvEmpleado = new Cl_mvEmpleado({
      nombre: this.vEmpleado.nombre,
      sexo: this.vEmpleado.sexo,
     
    });
    return this.mvEmpleado;
  }
  reportarEmpleado(
    cantidadHombres,
    porcentajeMujer
  ) {
    
    this.salida.innerHTML =`<br> cantidad de hombres${cantidadHombres}
    <br>porcentaje mujer: ${porcentajeMujer}%
     `
  }
}
