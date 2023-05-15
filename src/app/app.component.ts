import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { bottomRow } from './icon-text/icon-text.model';
import { EquilibriumComponent } from './equilibrium/equilibrium.component';
import { IconTextComponent } from './icon-text/icon-text.component';

@Component({
  imports: [CommonModule, EquilibriumComponent, IconTextComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  bottomRow = bottomRow;
  title = 'nft-preview-card-component';
}
