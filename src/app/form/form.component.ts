import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public notas:number = 0
  public promedioT:number = 0
  public sumaPromedio:number = 0
  public mostrar:boolean = false

  @Output() notass = new EventEmitter<number>()
  @Output() promedioFinal = new EventEmitter<number>()
  @Input() array:number[] = []
  
  resultadoNotas(){
    this.notass.emit(this.notas)
  }

  promedio(){
    this.mostrar = true 
    this.array.forEach((item)=>{
      this.sumaPromedio = this.sumaPromedio + item
    })
    this.promedioT = (this.sumaPromedio / this.array.length)
    this.promedioFinal.emit(this.promedioT)
  }
  
}
