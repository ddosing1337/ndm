import { Component } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  imports: [MatSortModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {}
