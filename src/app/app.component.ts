import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myweb';

  clicked(){
    var background= document.getElementById('background');
    return background;
  }
}
 