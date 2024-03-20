import { NgIcon, provideIcons } from '@ng-icons/core';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { heroUsers,heroDevicePhoneMobile,heroArrowDown } from '@ng-icons/heroicons/outline';
import { ionLogoFacebook,ionLogoGithub,ionLogoInstagram,ionLogoTwitter,ionLogoStackoverflow,ionLogoLinkedin,ionMailOutline,ionLocationOutline,ionCalendarNumberOutline,ionCloudDownloadOutline,ionCloudDownloadSharp } from '@ng-icons/ionicons';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-mobilecontact',
  standalone: true,
  imports: [NgIcon,NgIf,NgClass,MatIconModule],
  templateUrl: './mobilecontact.component.html',
  styleUrl: './mobilecontact.component.css',
  viewProviders: [provideIcons({ heroUsers,ionLogoFacebook,ionLogoGithub,ionLogoInstagram,ionLogoTwitter,ionLogoStackoverflow,ionLogoLinkedin,heroDevicePhoneMobile,ionMailOutline,ionLocationOutline,ionCalendarNumberOutline,ionCloudDownloadOutline,ionCloudDownloadSharp,heroArrowDown})]

})
export class MobilecontactComponent {
  contactSectionExpanded:boolean = false;
  expandContactSection(){
        this.contactSectionExpanded = !this.contactSectionExpanded
  }
}
