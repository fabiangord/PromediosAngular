import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  @Input() resultadoNota:number = 0
  @Input() promedios:number = 0
  @Input() item:number = 0
  
}
