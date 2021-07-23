import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.scss']
})
export class ViewportComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
