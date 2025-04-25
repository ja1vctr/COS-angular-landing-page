import { Component } from '@angular/core';
import { LogoOticaSavanaComponent } from '../../svg/components/logo-otica-savana/logo-otica-savana.component';

@Component({
  selector: 'app-header',
  imports: [LogoOticaSavanaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
