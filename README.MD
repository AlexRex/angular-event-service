[![npm version](https://badge.fury.io/js/angular-event-service.svg)](https://badge.fury.io/js/angular-event-service)

# :satellite: Angular Events Service

An angular service to broadcast and listen global events. It works like Anagular@1 event service. 

## Installation

To install this library, run:

```bash
$ npm install angular-event-service --save
```

## Using it

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-event-service
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import the module
import { EventsServiceModule } from 'angular-event-service';

@NgModule({
  declarations: [
    AppComponent
    // ...
  ],
  imports: [
    BrowserModule,
    // ...
    // Import forRoot()
    EventsServiceModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use it in your app like this: 

```typescript
import { Component } from '@angular/core';

import { EventsService } from 'angular-event-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _eventsService: EventsService) {
  }

  ngOnInit() {
    this._eventsService.on('test', (payload: any) => {
      console.log(payload);
    });
  }

  ngAfterViewInit() {
    this._eventsService.broadcast('test', 'testPayload');
    setTimeout(() => {
      this._eventsService.broadcast('test', 'testPayload2');
    }, 1500);
  }
}
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Alex Torres](mailto:aletormat@gmail.com)
