import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.scss'],
})
export class ModalGenericComponent {
  @Input() modalGlass = false;
  @Input() modalActive = false;

  fuckOffModal() {
    this.modalActive = false;
  }
}
