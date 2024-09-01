import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public _myData$ = new BehaviorSubject<any>(null)
  public myData$ = this._myData$.asObservable()
  public _waitingResponse$ = new BehaviorSubject<boolean>(false)

  constructor() { }

  // seed local storage with initial data
  seedData() {
    const currentMessages = localStorage.getItem('messages')
    if (currentMessages != null) {
      this._myData$.next(JSON.parse(currentMessages))
      return
    }
    const message = {
      content: 'Hi I’m Ifoki, I am here to answer any of your questions about the hackathon',
      role: 'bot'
    }
    this.addMessage(message);
  }

  setWaitingStatus( status: boolean ){
    const waitingStatus = localStorage.getItem('waitingStatus')
                          ? JSON.parse(localStorage.getItem('waitingStatus')!)
                          : 0
    const newWaitingStatus = status ? waitingStatus + 1 : waitingStatus - 1

    localStorage.setItem('waitingStatus', JSON.stringify(newWaitingStatus))
    this._waitingResponse$.next( newWaitingStatus > 0)
  }

  resetWaitingStatus(){
    localStorage.setItem('waitingStatus', JSON.stringify(0))
    this._waitingResponse$.next(false)
  }



  // add message to local storage
  addMessage(message: any) {
    const messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')!) : []
    messages.push(message)
    localStorage.setItem('messages', JSON.stringify(messages))
    this._myData$.next(messages)
  }



}
