import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'comment',
    templateUrl: './commentDialog.component.html'
})



export class CommmentDialog{

//@Input('comments') comments : string[];

constructor(public dialogRef: MatDialogRef<CommmentDialog>, @Inject(MAT_DIALOG_DATA) public comments: string[]) {}
    
  onNoClick(): void {
    this.dialogRef.close();
  }

}
