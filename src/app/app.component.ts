import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CursoCF';
  public userSubscribed: boolean = false;

  subscriptionChanged(ev : any){
    console.log("El usuario se Suscribió");
    this.subscriptionChanged = ev;
  }
}
