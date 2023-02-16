import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public notasArray:number[] = []
  public nota:number = 0
  public promedios:number = 0
  public mostrar:boolean = false

  notasTotal(notas:number){
    this.nota = notas
    this.notasArray.push(this.nota)
  }

  promedioTotal(promedio:number){
    this.promedios = promedio
  }
  
}
