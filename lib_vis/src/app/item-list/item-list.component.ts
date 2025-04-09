import { Component, OnInit } from '@angular/core';
import { Item } from '../item-card/item.model';
import { ItemCardComponent } from '../item-card/item-card.component';
import { ApiService } from '../services/api.service';
import { NgFor } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemCardComponent, NgFor, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit {
  packages: Item[] = [];
  dependencies: string[] = [];
  filteredItems: Item[] = [];
  filterText: string = '';
  
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages(): void {
    this.apiService.getPackages().subscribe({
      next: (data) => {
        this.packages = data.filter(item => item && item.id);
        this.filteredItems = [...this.packages]; 
        console.log('Packages loaded:', this.filteredItems);
      },
      error: (err) => console.error('Error loading packages:', err)
    });
  }

  onHover(itemId: string): void {
    if (itemId) {
      this.apiService.getDependencies(itemId).subscribe({
        next: (deps) => {
          console.log(`Dependencies for ${itemId}:`, deps);
          this.dependencies = deps;
        },
        error: (err) => console.error('Error loading dependencies:', err)
      });
    } else {
      this.dependencies = []; 
    }
  }

  filterItems(): void { 
    this.filteredItems = this.packages.filter(item =>
      item.id.toLowerCase().includes(this.filterText.toLowerCase())
    );
    console.log('FilteredItems:', this.filteredItems);
  }
}
