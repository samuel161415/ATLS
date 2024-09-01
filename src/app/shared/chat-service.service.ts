import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  errorMsg: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  sendMessage(message: string, ipAddress: string){

    return this.httpClient.post(
      // 'https://ifoki-lylswf275a-ew.a.run.app/api/chat',
      'https://a2sv-generative-ai-hackathon-lylswf275a-zf.a.run.app/api/v1/chats',
      { ip_address: ipAddress, query: message },
    ).pipe(
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
          this.errorMsg = `Error: ${error.error.message}`;
        } else {
          this.errorMsg = this.getServerErrorMessage(error);
        }
        return of({
          message: this.errorMsg,
        });
      })
    );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 429:{
        return `You have reached your daily limit. please try again later`;
      }
      case 404: {
        return `Not Found`;
      }
      case 403: {
        return `Access denied`;
      }
      case 500: {
        return `Unknown error has happened try again`;
      }
      case 0:{
        return "Please Check Your Internet Connection"

      }
      default: {
        // console.log('Chat-Service ~ Unknown Error: ',error.message, 'StatusCode: ', error.status)
        return `Unknown Server Error`;
      }

    }
  }
}
