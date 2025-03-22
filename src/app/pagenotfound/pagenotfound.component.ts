import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagenotfound',
    template: `
      <div class="error-container">
        <img class="errorimage" src="./assets/404errorpage.png">
        <button mat-button routerLink="/home">This will take you back home</button>
      </div>
  `,
    styles: [
        `
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        img.errorimage {
          margin-top:20px;
          max-width:100%;
          border-radius: 10px;
        }
        button{
          display: block;
          margin-top:10px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 10px;
          color: #216f79;
          font-size:2em;
        }
  `
    ],
    standalone: false
})
export class PagenotfoundComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
