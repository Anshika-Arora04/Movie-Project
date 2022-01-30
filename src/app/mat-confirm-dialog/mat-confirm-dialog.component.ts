import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent implements OnInit {


  // rating:number = 0;
  // starCount:number = 5;
  // ratingArr = [1,2,3,4,5];
  // starColor='primary';



  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<MatConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

 /* onClick(rating:number) {
    this.rating=rating;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }*/
}
