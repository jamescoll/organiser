import {
    Component
  } from '@angular/core';
 
  import * as moment from 'moment';
  
  @Component({
    selector: 'mwl-time-component',
    templateUrl: './time.component.html'
  })
  export class TimeComponent {
    
  
    clock: String;
  
    constructor() {
      // Runs the enclosed function on a set interval.
      setInterval(() => {
  
          this.clock = moment().format('dddd, h:mm:ss a');
      }, 1000) // Updates the time every second.
  }
  
  }