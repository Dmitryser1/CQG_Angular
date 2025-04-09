import { Component } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  imports: [ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'npm-packages-app';
}