import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent {
  @Input() item?: Item;
  @Output() saved = new EventEmitter<void>();
  
  formItem: Item = { id: 0, name: '', description: '' };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    if (this.item) {
      this.formItem = { ...this.item };
    }
  }

  onSubmit(): void {
    if (this.item) {
      // Mode édition
      this.itemService.updateItem(this.item.id, this.formItem);
    } else {
      // Mode création
      this.itemService.addItem(this.formItem);
      this.formItem = { id: 0, name: '', description: '' };
    }
    this.saved.emit();
  }
}