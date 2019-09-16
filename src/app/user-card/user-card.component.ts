import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public name: string;
  public username: string;
  public avatar: string;

  @Output() subscribed = new EventEmitter<boolean>();

  constructor() { }
 
  ngOnInit() 
  {
    this.name ="Norlan";
    this.username = "ngarcia";
    this.avatar = 'https://cdn.dribbble.com/users/499731/screenshots/5058486/finger_twirls_2x.png';

    setTimeout(()=> this.subscribed.emit(true), 3000);
  }

  changing(event : any){
this.username = event.target.value;
  }
}
