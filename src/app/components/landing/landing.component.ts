import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {
  faArrowDown = faArrowDown;
  @Output() onDownArrowClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClick(): void {
    this.onDownArrowClick.emit(null);
  }
}
