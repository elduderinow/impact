import { Component, OnInit } from '@angular/core';
import {Asteroid} from "../../../models/asteroid";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  mainAsteroid: Asteroid = new Asteroid("",0,"",0,0,0,true,true,0)
  asteroids: Asteroid[] = this.appComponent.allAsteroids

  constructor(private appComponent: AppComponent) {
  }

  ngOnInit(): any {
  }

  getAsteroid(id:number){
    this.mainAsteroid = this.asteroids.find(elem => elem.id == id)!
    console.log(this.mainAsteroid)
  }

}

