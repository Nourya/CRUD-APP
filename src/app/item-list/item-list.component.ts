import { Component, signal } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items = signal<Item[]>([]);
  selectedItem = signal<Item | null>(null);

  constructor(private itemService: ItemService) {
    this.loadItems();
  }

  loadItems(): void {
    this.items.set(this.itemService.getItems());
  }

  onSelect(item: Item): void {
    this.selectedItem.set(item);
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      this.itemService.deleteItem(id);
      this.loadItems();
      if (this.selectedItem()?.id === id) {
        this.selectedItem.set(null);
      }
    }
  }

  onItemSaved(): void {
    this.loadItems();
    this.selectedItem.set(null);
  }
}