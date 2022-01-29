import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar: MatSnackBar, private matDialog: MatDialog) { }

  showNotification(message: string, button: string){
    this.snackBar.open(message, button,
       {duration:2000, horizontalPosition:'right',verticalPosition:'bottom'}
    );
  }

  showDialogConfirmation(msg: string){
     return this.matDialog.open(MatConfirmDialogComponent,{
       width:'400px',
       panelClass: 'confirm-dialog-container',
       disableClose:true,
       position:{top:'20px'},
       data:{
         message: msg
       }
     });
  }
}
