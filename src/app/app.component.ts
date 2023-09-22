import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ImagePath!: string;
  title = 'portfolio';

  constructor(private viewportScroller: ViewportScroller) {
    this.ImagePath = '/assets/person.png'
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }
}
