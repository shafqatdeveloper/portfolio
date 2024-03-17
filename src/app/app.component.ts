import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './sidebar/contact/contact.component';
import {MatIconModule} from '@angular/material/icon';
import { NavlinksComponent } from './sidebar/navlinks/navlinks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactComponent,MatIconModule,NavlinksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
