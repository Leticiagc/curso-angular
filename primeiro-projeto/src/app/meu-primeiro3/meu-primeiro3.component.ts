import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'meu-primeiro3-component',
  templateUrl: './selection-bar-gradient-slider.component.html'
})

export class MeuPrimeiro3Component {
  minValue: number = 0;
  maxValue: number = 80;
  options: Options = {
    ceil: 100,
    showSelectionBar: true,
    selectionBarGradient: {
      from: 'white',
      to: '#FC0'
    }
  };
}
