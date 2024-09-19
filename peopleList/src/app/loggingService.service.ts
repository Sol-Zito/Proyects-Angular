import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  sendMessage(message: string) {
    console.log(message);
  }
}
