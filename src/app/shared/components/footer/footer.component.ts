import { Component } from '@angular/core';
import { LogoInstagramComponent } from '../../svg/components/logo-instagram/logo-instagram.component';
import { LogoWhatsappComponent } from '../../svg/components/logo-whatsapp/logo-whatsapp.component';
import { LogoFacebookComponent } from '../../svg/components/logo-facebook/logo-facebook.component';

@Component({
  selector: 'app-footer',
  imports: [
    LogoInstagramComponent,
    LogoWhatsappComponent,
    LogoFacebookComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}
