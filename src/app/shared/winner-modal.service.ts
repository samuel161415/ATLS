import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WinnerModalService {
  private isModalOpenSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isModalOpen$: Observable<boolean> =
    this.isModalOpenSubject.asObservable();
  private modalDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public modalData$: Observable<any> = this.modalDataSubject.asObservable();

  constructor() {}

  toggleModal(open: boolean, data?: any): void {
    this.isModalOpenSubject.next(open);
    if (data) {
      this.modalDataSubject.next(data);
    }
  }
 
}
