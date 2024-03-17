import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionHomeOutline,ionDocumentTextOutline } from '@ng-icons/ionicons';
import { cssToolbox } from "@ng-icons/css.gg";
import { typContacts } from "@ng-icons/typicons";

@Component({
  selector: 'app-navlinks',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './navlinks.component.html',
  styleUrl: './navlinks.component.css',
  viewProviders:[provideIcons({ionHomeOutline,ionDocumentTextOutline,cssToolbox,typContacts})]
})
export class NavlinksComponent {

}
