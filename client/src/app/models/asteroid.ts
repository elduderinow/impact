export class Asteroid {
  name:string;
  magnitude:number;
  diameter:any;
  approach:number;
  velocity:number;
  id:number;
  hazardous:boolean;
  sentry:boolean;
  missDistance:number;
  averageDiameter: number;
  countdown:any;

  constructor(name: string, magnitude: number, diameter: any, approach: number, velocity: number, id: number, hazardous: boolean, sentry: boolean, missDistance: number) {
    this.name = name;
    this.magnitude = magnitude;
    this.diameter = diameter;
    this.approach = approach;
    this.velocity = velocity;
    this.id = id;
    this.hazardous = hazardous;
    this.sentry = sentry;
    this.missDistance = missDistance;
    this.averageDiameter = this.getAverage()
    this.countdown = "";
  }

  getAverage() {
    return (this.diameter["estimated_diameter_max"] + this.diameter["estimated_diameter_max"]) / 2
  }
}
