import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-preguntas-seguridad',
  templateUrl: './preguntas-seguridad.component.html',
  styleUrls: ['./preguntas-seguridad.component.css']
})
export class PreguntasSeguridadComponent {

  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  size: NzButtonSize = 'large';
}

export class NzDemoBreadcrumbSeparatorComponent {}