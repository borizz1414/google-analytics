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

  constructor(public router: Router){

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){

        console.log(event.urlAfterRedirects);
        gtag('config', 'G-P61F7JWBGT', {'page_path': event.urlAfterRedirects});
        gtag("set", "user_properties", {
          user_id: "111111111",
        });
        gtag("set", "user_properties", {
          name: "Nestor Sanchez",
        });
        gtag("set", "user_properties", {
          email: "nestor@gmail.com",
        });
      }
    })
  }

  setUser() {
    gtag("set", "user_properties", {
      user_id: "1212121",
    });
    gtag("set", "user_properties", {
      name: "Boris Lopez",
    });
    gtag("set", "user_properties", {
      email: "boris@gmail.com",
    });
  }
}
