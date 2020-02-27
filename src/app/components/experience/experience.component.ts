import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {

  @Input() iframeURL: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() class: string;

  secureIFrameURL;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.secureIFrameURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeURL)
    this.class += ' experience-container'
  }
}
