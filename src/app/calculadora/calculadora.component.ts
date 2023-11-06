import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  edad: string = "";
  valorNumerico: number = 0;
  enLibras: boolean = true;
  enKilos: boolean = false;
  prueba: boolean = false;
  //determina si es la primera vez que se escribe en la seccion de peso
  //para limpiar la linea
  primeraPasada:boolean = false;
  //opciones de mensaje
  diagnostico:boolean = false;
  reguetonero:boolean = false;
  dolor:boolean = false;
  opcionesEdad: Array<string> = ['Niño', 'Adulto', 'Ser antiguo'];
  opcionesDatos: Array<boolean> = [false, false, false, false];
  opcionesSintomas: Array<boolean> = [false, false, false, false, false, false]

  hazAlgo() {
    this.diagnostico = true;
    if(this.opcionesSintomas[2]){
      this.reguetonero = true;
      this.dolor = false;
    }else{
      this.dolor = true;
      this.reguetonero = false;
    }
  }

  actualizarOpciones() {
    this.opcionesDatos[0] = (this.edad.trim().length != 0);
    if (this.opcionesDatos[0] == true) {
      console.log("si es true esa onda");
    }
  }

  validarInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const valor = input.value;
    const numero = parseInt(valor, 10);
    if(!this.primeraPasada){
      input.value = this.valorNumerico ? this.valorNumerico.toString() : '';
      this.primeraPasada = false;
    }
    if (isNaN(numero)) {
      // Si el valor no es un número, restablece el input a su valor anterior
      input.value = this.valorNumerico ? this.valorNumerico.toString() : '';
      this.opcionesDatos[1]=false;
    } else {
      // Si el valor es un número, actualiza el valor numérico
      this.valorNumerico = numero;
      this.opcionesDatos[1]=true;
    }
  }

   comprobar(){
    for(let i of this.opcionesSintomas){
      if(i == true){
        
        this.prueba = true;
        return
      }else{
        this.prueba = false;
      }
    }

  }
  mostrarDiv: boolean = false;


  cambiarALibras() {
    this.enLibras = true;
    this.enKilos = false;
  }
  cambiarAKilos() {
    this.enKilos = true;
    this.enLibras = false;
  }
}
