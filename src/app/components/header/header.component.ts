import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HttpClientModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
