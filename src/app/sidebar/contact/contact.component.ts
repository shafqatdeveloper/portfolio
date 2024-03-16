import { NgIcon, NgIconComponent, provideIcons } from '@ng-icons/core';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { heroUsers,heroDevicePhoneMobile } from '@ng-icons/heroicons/outline';
import { ionLogoFacebook,ionLogoGithub,ionLogoInstagram,ionLogoTwitter,ionLogoStackoverflow,ionLogoLinkedin,ionMailOutline,ionLocationOutline,ionCalendarNumberOutline,ionCloudDownloadOutline,ionCloudDownloadSharp } from '@ng-icons/ionicons';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule,NgIcon],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  viewProviders: [provideIcons({ heroUsers,ionLogoFacebook,ionLogoGithub,ionLogoInstagram,ionLogoTwitter,ionLogoStackoverflow,ionLogoLinkedin,heroDevicePhoneMobile,ionMailOutline,ionLocationOutline,ionCalendarNumberOutline,ionCloudDownloadOutline,ionCloudDownloadSharp})]
})
export class ContactComponent {

}
