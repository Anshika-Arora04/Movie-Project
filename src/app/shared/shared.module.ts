import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@NgModule({
  declarations: [ NavBarComponent ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    BsDropdownModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    BsDropdownModule,
    MatTooltipModule,
    NavBarComponent
  ]
})
export class SharedModule { }
