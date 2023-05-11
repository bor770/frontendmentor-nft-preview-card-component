import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { IconText } from './icon-text.model';

@Component({
  imports: [CommonModule, MatIconModule],
  selector: 'app-icon-text',
  standalone: true,
  styleUrls: ['./icon-text.component.css'],
  templateUrl: './icon-text.component.html',
})
export class IconTextComponent implements OnInit {
  @Input() data: IconText;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      this.data.icon,
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `../../assets/images/icon-${this.data.icon}.svg`
      )
    );
  }
}
