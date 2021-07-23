import {Component, Input, OnInit} from '@angular/core';
import {Asteroid} from "../../../models/asteroid";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-display-hud',
  templateUrl: './display-hud.component.html',
  styleUrls: ['./display-hud.component.scss']
})
export class DisplayHudComponent implements OnInit {
  mainAsteroid: Asteroid = new Asteroid("",0,"",0,0,0,true,true,0)
  asteroids: Asteroid[] = this.appComponent.allAsteroids

  @Input()
  set finalData(value: any) {
    if (value) this.getAsteroid(value);
  }

  constructor(private appComponent: AppComponent) {
  }

  ngOnInit(): void {
  }

  getAsteroid(id: number) {
    this.mainAsteroid = this.asteroids.find((elem) => elem.id == id)!;
    this.mainAsteroid.missDistance = parseFloat(String(this.mainAsteroid.missDistance))
    this.mainAsteroid.velocity = parseFloat(String(this.mainAsteroid.velocity))
    this.mainAsteroid.magnitude = Math.round(Number(this.mainAsteroid.magnitude))
    console.log(this.mainAsteroid);
  }

}
