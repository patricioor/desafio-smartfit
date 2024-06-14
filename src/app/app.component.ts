import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FormsComponent} from "./components/forms/forms.component";
import {HttpClientModule} from "@angular/common/http";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {CardsListComponent} from "./components/cards-list/cards-list.component";
import {Location} from "./types/location.interface";
import {GetUnitsService} from "./services/get-units.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsComponent, HttpClientModule, AsyncPipe, JsonPipe, CardsListComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showList = new BehaviorSubject(false)
  unitsList: Location[] = []
  onSubmit() {
    this.unitsList = this.UnitService.getFilteredUnits();
    this.showList.next(true);
  }
  constructor(private UnitService: GetUnitsService) {}
}
