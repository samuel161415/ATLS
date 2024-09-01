// modal.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isModalOpen: boolean = false;
  modalStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  openModal() {
    // console.log('open clicked',this.modalStateChanged);
    
    this.isModalOpen = true;
    this.modalStateChanged.emit(true);
  }

  closeModal() {
    // console.log('closed clicked',this.modalStateChanged);
    
    this.isModalOpen = false;
    this.modalStateChanged.emit(false);
  }
}
