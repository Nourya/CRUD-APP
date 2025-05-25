import { Component } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemListComponent, MatToolbarModule, MatCardModule],
  template: `
    <div class="app-container">
      <mat-toolbar color="primary" class="toolbar">
        <span class="toolbar-title">Gestion des Éléments</span>
      </mat-toolbar>

      <mat-card class="main-card">
        <mat-card-content>
          <app-item-list></app-item-list>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
      padding: 20px;
    }

    .toolbar {
      border-radius: 12px 12px 0 0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      margin-bottom: -1px; /* Pour l'effet de continuité avec la carte */
    }

    .toolbar-title {
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .main-card {
      border-radius: 0 0 12px 12px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      overflow: hidden;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(8px);
    }
  `]
})
export class AppComponent {}