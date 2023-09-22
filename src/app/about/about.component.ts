import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ImagePerson!: string;

  constructor(){
    this.ImagePerson='/assets/2023-09-21_18-00-45.png';
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
