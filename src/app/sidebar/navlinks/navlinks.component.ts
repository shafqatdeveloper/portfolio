import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionHomeOutline,ionDocumentTextOutline,ionSchoolSharp } from '@ng-icons/ionicons';
import { cssToolbox } from "@ng-icons/css.gg";
import { typContacts } from "@ng-icons/typicons";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navlinks',
  standalone: true,
  imports: [NgIcon,NgClass],
  templateUrl: './navlinks.component.html',
  styleUrl: './navlinks.component.css',
  viewProviders:[provideIcons({ionHomeOutline,ionDocumentTextOutline,cssToolbox,ionSchoolSharp,typContacts})]
})
export class NavlinksComponent {
  @Input() activeComponent:any;
  @Output() updateActiveState = new EventEmitter<string>();
  updateValue(value: string) {
    this.updateActiveState.emit(value);
  }
}
