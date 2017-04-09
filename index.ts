import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from './src/events.service';

export * from './src/events.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class EventsServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EventsServiceModule,
      providers: [EventsService]
    };
  }
}
