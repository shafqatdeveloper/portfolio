import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './sidebar/contact/contact.component';
import {MatIconModule} from '@angular/material/icon';
import { NavlinksComponent } from './sidebar/navlinks/navlinks.component';
import { HomeComponent } from './pages/home/home.component';
import { EducationComponent } from './pages/education/education.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';
import { NgIf } from '@angular/common';
import { MobilecontactComponent } from './sidebar/mobilecontact/mobilecontact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactComponent,MobilecontactComponent,MatIconModule,NavlinksComponent,HomeComponent,EducationComponent,ResumeComponent,ContactmeComponent,WorksComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  activeComponent:string = "home"
  active = "home"
  handleActiveComponent(value: string) {
    this.active = value;
    this.activeComponent = value;
  }
}
