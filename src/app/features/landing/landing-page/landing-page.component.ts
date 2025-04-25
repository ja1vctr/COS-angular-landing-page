import { Component } from '@angular/core';
import { BannerComponent } from '../components/banner/banner.component';
import { ContatoComponent } from '../components/contato/contato.component';
import { LocalizacaoComponent } from '../components/localizacao/localizacao.component';
import { PromocaoComponent } from '../components/promocao/promocao.component';
import { SobreComponent } from '../components/sobre/sobre.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeaderComponent,
    BannerComponent,
    ContatoComponent,
    LocalizacaoComponent,
    PromocaoComponent,
    SobreComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
