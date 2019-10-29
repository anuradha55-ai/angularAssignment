import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { blog } from 'src/home/blog';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  dataSource : blog[];
  displayedColumns: string[] = ['title', 'likes', 'dislikes', 'comments'];

  constructor(private blogService: BlogService) { }

  ngOnInit() {

    
    console.log("inside oninit method of activity");
    this.blogService.blogData$.subscribe(data => {
      this.dataSource = data;
    });
  }

}
