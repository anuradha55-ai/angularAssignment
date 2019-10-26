import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BlogService } from '../app/blog.service';
import { blog } from './blog';
import { CommmentDialog }  from './commentDialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: blog[];
  imageSrc: string;
  likes: number = 0;
  @ViewChild('comment') comment: ElementRef;

  constructor(private blogService: BlogService, public dialog: MatDialog) { 
    /**/
  }

  ngOnInit() {
    console.log("inside home init method");
    this.blogService.getBlogs().subscribe((data: any[]) => {
      console.log(data);
      this.blogs = data;
    });
  }


  onLikeButtonClick(id: number) {
    this.blogService.getBlog(id).subscribe((data) => {
      data.likes = data.likes + 1;
      this.blogService.addLikes(data).subscribe((data) => {
        this.blogs[id] = data;
      });
    });
  }



  openDialog(id: number)  {
    const dialogRef = this.dialog.open(CommmentDialog, {
      width: '500px',
      data: this.blogs[id].comments
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  onPostButtonClick(id: number, comment: string) {
    this.blogService.getBlog(id).subscribe((data) => {
     
      this.blogService.addComment(this.blogs[data.id]).subscribe((data) =>{
        data.comments.push(comment);
        this.blogs[data.id] = data;
      });
      this.comment.nativeElement.value = "";
    });
  }



}
