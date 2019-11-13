import { Component, Inject, ViewChild, ElementRef, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { blog } from './blog';
import { comment } from './comment';
import { forEach } from '@angular/router/src/utils/collection';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'comment',
  templateUrl: './commentDialog.component.html'
})



export class CommmentDialog {

  @ViewChild('chkBox') checkBox: ElementRef;
  blogId : number;
  commentsToBeKept : comment[] = [];
  deleteComments : boolean;

  constructor(public dialogRef: MatDialogRef<CommmentDialog>, @Inject(MAT_DIALOG_DATA) public comments: comment[], private blogService: BlogService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  list_change(i: number, checked: boolean) {
    this.comments[i].checked = checked;
  }



  onDeleteClick() {
   
    console.log("comments to be kept : " + JSON.stringify(this.commentsToBeKept));
    this.comments.forEach((item, index) => {
      console.log("item : " + item.value + " item checked : " + item.checked + "  index : " + index);
      if(item.checked == false) {
        this.commentsToBeKept.push(item);
      }
    });
    this.deleteComments = true;

    this.blogService.blogId$.subscribe(id => {
      this.blogService.blogData$.subscribe(data => {
        if (this.deleteComments === true) {
          data[id].comments = this.commentsToBeKept;
          this.comments = data[id].comments;
          this.blogService.setUpdatedBlog(data);
          this.commentsToBeKept = [];
          this.deleteComments = false;
        }
      });
    });
  }

}
