import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { trigger, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})

export class ExperienceComponent implements OnInit {

  @Input() iframeURL: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() class: string;
  @Input() description: string;
  @Input() site: string;
  @Input() github: string;

  secureIFrameURL;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.secureIFrameURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeURL)
    this.class += ' experience-container'
  }

  goToLink(url) {
    window.open(url, "_blank");
  }
}
