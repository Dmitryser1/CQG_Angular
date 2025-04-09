import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';
import { NgClass, NgIf } from '@angular/common';
import { FormatNumberPipe } from '../pipes/format-number.pipe';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports:[NgIf, NgClass, FormatNumberPipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent implements OnInit {
  @Input() itemData?: Item;
  @Input() highlightedDependencies: string[] = []; 
  @Output() hover = new EventEmitter<string>(); 

  onMouseEnter() {
    if (this.itemData) {
      this.hover.emit(this.itemData.id); 
    }
  }

  onMouseLeave() {
    this.hover.emit(''); 
  }

  ngOnInit(): void {
    console.log(this.itemData);
  }
}
