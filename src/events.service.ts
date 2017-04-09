import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

/**
 * Send and receive events with the .on .broadcast syntax.
 */
@Injectable()
export class EventsService {
  private listeners: any;
  private eventsSubject: any;
  private events: any;

  constructor() {
    this.listeners = {};
    this.eventsSubject = new Rx.Subject();

    this.events = Rx.Observable.from(this.eventsSubject);

    this.events.subscribe(({name, args}: any) => {
      if (this.listeners[name]) {
        for (let listener of this.listeners[name]) {
          listener(...args);
        }
      }
    });
  }

  /**
   * Listens an event and broadcasts it to the listeners.
   * @param  {string} name Event name
   * @param  {any} listener Function to call when receiving an event
   */
  on(name: string, listener: any): void {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    this.listeners[name].push(listener);
  }

  /**
   * Emits an event to all the listeners.
   * @param {string} name Name of the event to broadcast
   * @param {Array<any>} args Payload of arguments to send. 
   */
  broadcast(name: string, ...args: Array<any>): void {
    this.eventsSubject.next({
      name,
      args
    });
  }
}
