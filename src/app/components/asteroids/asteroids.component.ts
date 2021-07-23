import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AppComponent} from "../../app.component";
import {Asteroid} from "../../models/asteroid";
import {InformationComponent} from "../viewport/information/information.component";

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})

export class AsteroidsComponent implements OnInit {
  asteroids: Asteroid[] = this.appComponent.allAsteroids;
  @Output() redirect: EventEmitter<any> = new EventEmitter();

  constructor(private appComponent: AppComponent, private infoComp: InformationComponent) {}

  ngOnInit(): any {
    this.getCountdown();
  }

  onClick(id:number){
    this.redirect.emit(id);
  }

  getCountdown(): any {
    let currentDate = new Date().getTime()
    this.asteroids.forEach(time => {
      let timeDiffSeconds = (time.approach - currentDate)
      let seconds = Math.round(timeDiffSeconds/1000%60)
      let minutes = Math.round(timeDiffSeconds/1000/60%60)
      let hours = Math.round(timeDiffSeconds/1000/60/60%24)
      let days = Math.round(timeDiffSeconds/1000/60/60/24)
      time.countdown = days + " days " + hours + ":h " + minutes + ":m " + seconds + ":s"
    })
  }
}
