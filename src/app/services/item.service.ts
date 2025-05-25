import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' }
  ];

  getItems(): Item[] {
    return this.items;
  }

  getItemById(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }

  addItem(item: Omit<Item, 'id'>): Item {
    const newItem = {
      id: this.generateId(),
      ...item
    };
    this.items.push(newItem);
    return newItem;
  }

  updateItem(id: number, item: Partial<Item>): Item | undefined {
    const index = this.items.findIndex(i => i.id === id);
    if (index === -1) return undefined;
    
    this.items[index] = { ...this.items[index], ...item };
    return this.items[index];
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  private generateId(): number {
    return this.items.length > 0 
      ? Math.max(...this.items.map(i => i.id)) + 1 
      : 1;
  }
}