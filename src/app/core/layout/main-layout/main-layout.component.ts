import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/ui/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/ui/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
