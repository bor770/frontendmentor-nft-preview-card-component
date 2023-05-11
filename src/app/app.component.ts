import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { IconText } from './icon-text/icon-text.model';
import { IconTextComponent } from './icon-text/icon-text.component';

@Component({
  imports: [CommonModule, IconTextComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  bottomRow: IconText[] = [
    { color: `cyan`, icon: `ethereum`, text: `0.041 ETH`, weight: 400 },
    { color: `soft-blue`, icon: `clock`, text: `3 days left`, weight: 300 },
  ];
  title = 'nft-preview-card-component';
}
