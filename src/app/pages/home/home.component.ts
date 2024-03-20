import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon,provideIcons } from "@ng-icons/core";
import { ionCodeSlash } from "@ng-icons/ionicons";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIcon,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  viewProviders:[provideIcons({ionCodeSlash})]
})
export class HomeComponent {
    @Input() active:string = "home"
    about = [
      {name:"web development",icon:"ionCodeSlash",desc:"With the specialization in MERN and MEAN stacks, we deliver dynamic, full-stack web solutions that drive business success.",bgColor:"bg-red-100",iconColor:"text-red-500"},
      {name:"App development",icon:"ionCodeSlash",desc:"With the specialization React Native, we create cross-platform mobile apps that offer a native user experience on both iOS and Android.",bgColor:"bg-violet-100",iconColor:"text-violet-500"},
      {name:"Graphic Design",icon:"ionCodeSlash",desc:"With Adobe Illustrator and Photoshop at our core, we craft visually captivating designs that embody your brand’s aesthetic and message.",bgColor:"bg-violet-100",iconColor:"text-violet-500"},
      {name:"Dynamic Programming",icon:"ionCodeSlash",desc:"Utiizing C++, we solve complex computational challenges with dynamic programming, ensuring optimal performance.",bgColor:"bg-red-100",iconColor:"text-red-500"},
]
}
