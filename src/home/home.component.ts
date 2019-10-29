import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BlogService } from '../app/blog.service';
import { blog } from './blog';
import { CommmentDialog }  from './commentDialog.component';
import { MatDialog } from '@angular/material';
import { comment } from './comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: blog[] = [];
  imageSrc: string;
  likes: number = 0;
  blogId : number;
  @ViewChild('comment') comment: ElementRef;

  constructor(private blogService: BlogService, public dialog: MatDialog) { 
    this.blogService.getBlogs().subscribe((data: blog[]) => {
      if(this.blogs === null) {
        this.blogs = data;
      }
    });
  }

  ngOnInit() {
    this.blogService.blogData$.subscribe(data => {
      this.blogs = data;
    });
  }


  onLikeButtonClick(id: number) {
      this.blogService.addData(this.blogs[id]).subscribe((data) => {
        data.likes = data.likes + 1;
        this.blogs[id] = data;
        this.blogService.setUpdatedBlog(this.blogs);
      });
  }

  onDislikeButtonClick(id: number) {
    this.blogService.addData(this.blogs[id]).subscribe((data) => {
      data.dislikes = data.dislikes + 1;
      this.blogs[id] = data;
      this.blogService.setUpdatedBlog(this.blogs);
    });
  }

  openDialog(id: number)  {
    console.log( JSON.stringify(this.blogs));
   
    const dialogRef = this.dialog.open(CommmentDialog, {
      width: '70%',
      data: this.blogs[id].comments
    });
    dialogRef.afterOpened().subscribe((result) => {
      this.blogService.setBlogId(id);
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
   
  }

  onPostButtonClick(id: number, comment: string) {
      this.blogService.addData(this.blogs[id]).subscribe((data) =>{
        this.blogs[id].comments.push({checked : false, value : comment});
        this.blogs[data.id] = data;
        this.blogService.setUpdatedBlog(this.blogs);
      });
      this.comment.nativeElement.value = "";
  }



}
