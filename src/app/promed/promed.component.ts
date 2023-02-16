import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promed',
  templateUrl: './promed.component.html',
  styleUrls: ['./promed.component.css']
})
export class PromedComponent {

  @Input() promedios:number = 0

}
