import { Component } from '@angular/core';
import{Router, NavigationEnd} from '@angular/router';

//declare gives Angular app access to ga function
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularGoogleAnalytics';
  name: string;
  id: number;
  email: string;
  constructor(public router: Router){

  
  }

  setUser() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        gtag('config', 'G-P61F7JWBGT', {'page_path': event.urlAfterRedirects, 'user_id':this.id});
        gtag("set", "user_properties", {
          'metises-user-id': this.id,
          'name': this.name,
          'email': this.email,
        });
      }
    })
  
  }
}
