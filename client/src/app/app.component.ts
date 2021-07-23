import { Component, OnInit } from '@angular/core';
import {AppService} from "./app.service";
import { Asteroid} from "./models/asteroid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'impact';
  tempAsteroids:any = [];
  allAsteroids:Asteroid[] = [];

  constructor(private app:AppService) {}

  public async getAsteroids(url: string) {
    const data = await fetch(url);
    const result = await data.json();
    let values = Object.entries(result.near_earth_objects)
    values.forEach((elem : any) => this.tempAsteroids.push(...elem[1]));
    this.tempAsteroids.forEach((elem : any) => {
      let asteroid = new Asteroid(elem.name, elem.absolute_magnitude_h, elem.estimated_diameter.kilometers,elem.close_approach_data[0].epoch_date_close_approach, elem.close_approach_data[0].relative_velocity.kilometers_per_hour, elem.id, elem.is_potentially_hazardous_asteroid, elem.is_sentry_object, elem.close_approach_data[0].miss_distance.kilometers)
      this.allAsteroids.push(asteroid)
      return this.allAsteroids
    })
  }

  ngOnInit(): any {
    this.getAsteroids(this.app.url);
  }




}
