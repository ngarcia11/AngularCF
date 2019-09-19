import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.css']
})
export class TittleComponent implements OnInit {
  public name: string;
  public edad: number;
  public edades: number[];
  public isAvailable : boolean = false;
  public moreInformation : boolean = false;
  public category: string; //Mobile, Web, Others
  public topics: string[];
  public price: number;
  public seconds : number;
  public launchDate: Date;
  @Input() subscribed: boolean;
  constructor() { }

  ngOnInit() {
  this.name = 'Norlan';
  this.edad = 21;
  this.launchDate = new Date(2019,10,21);
  this.price = 25;
  this.seconds = 3600;
  this.category = 'Web';
  this.topics = [
  'Fundamentos del Framework',
  'Componentes',
  'Directivas',
  'Animaciones',
  'Servicios',
  'RxJS',
  'Binding'
  ];
  /*setTimeout(() => this.name = 'Norlan Garcia' ,3000);
  setTimeout(() => this.isAvailable = false ,3000);
   setTimeout(() => this.moreInformation = true ,3000);
  */
  }

  getDatos() : string  {
  return `${this.name} : ${this.edad}`;
  }

  toggleMoreInformation(){
    this.moreInformation = !this.moreInformation;
  }

}
