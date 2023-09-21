import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-about',
  templateUrl: './menu-about.component.html',
  styleUrls: ['./menu-about.component.css']
})
export class MenuAboutComponent implements OnInit{
  ImageAngular!: string;
  ImageCss!: string;
  ImageGit!: string;
  ImageHtml!: string;
  ImageJava!: string;
  ImageJavaScript!: string;
  ImageLinux!: string;
  ImageMySql!: string;
  ImageTypeScript!: string;
  ImageVS!:string;
  ImageJira!:string;
  ImageWindows!:string;

  constructor(){
    this.ImageWindows='/assets/skills/Windows.png';
    this.ImageJira='/assets/skills/jira.png';
    this.ImageAngular='/assets/skills/angularjs.png';
    this.ImageCss='/assets/skills/css.png';
    this.ImageGit='/assets/skills/git.png';
    this.ImageHtml='/assets/skills/html.png';
    this.ImageJava='/assets/skills/java.png';
    this.ImageJavaScript='/assets/skills/javascript.png';
    this.ImageLinux='/assets/skills/linux.png';
    this.ImageMySql='/assets/skills/mysql.png';
    this.ImageTypeScript='/assets/skills/typescript.png';
    this.ImageVS='/assets/skills/visualstudio.png';
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
