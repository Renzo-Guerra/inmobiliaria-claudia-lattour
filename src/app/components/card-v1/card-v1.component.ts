import { Component, Input } from '@angular/core';
import Propiedad from 'src/app/interfaces/propiedad';

@Component({
  selector: 'app-card-v1',
  templateUrl: './card-v1.component.html',
  styleUrls: ['./card-v1.component.scss']
})
export class CardComponent {
  @Input() data!: Propiedad;
}
