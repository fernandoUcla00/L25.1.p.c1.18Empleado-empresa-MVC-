export default class Cl_controlador {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarEmpleado() {
    this.modelo.procesarEmpleado(this.vista.procesarEmpleado());
    this.vista.reportarEmpleado(
      this.modelo.cantidadHombres(),
      this.modelo.porcentajeMujer()
    );
  }
}
