import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  ImagePathAbout!: string;
  ImagePathContact!: string;
  ImagePathProject!: string;
  constructor(){
    this.ImagePathContact = '/assets/google_mail_icon_131657.png';
    this.ImagePathAbout = '/assets/google_docs_icon_131691.png'
    this.ImagePathProject = '/assets/google_keep_icon_131684.png'
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
