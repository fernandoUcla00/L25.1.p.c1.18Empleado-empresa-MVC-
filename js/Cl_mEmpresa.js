export default class Cl_mEmpresa{
  constructor() {
  this.contHombres=0;
  this.contMujeres=0;
  }
  procesarEmpleado(Empleado) {

     if(Empleado.sexo === 'M'){	
      this.contHombres++;
     }
     else{
      this.contMujeres++
     }
    
   
  }
 cantidadHombres(){
  return this.contHombres;
 }

 porcentajeMujer(){
  return this.contMujeres / (this.cantidadHombres() + this.contMujeres)*100;
 }
}
