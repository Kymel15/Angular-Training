import { Component } from '@angular/core';
import { ANY_STATE } from '@angular/compiler/src/private_import_core';
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <passenger-viewer></passenger-viewer>
  </div>
  `
})
export class AppComponent{
  
}