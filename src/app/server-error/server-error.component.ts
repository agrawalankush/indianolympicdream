import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-error',
  template: `
    <div class="wrapper">
<div class="box">
<h1>500</h1>
<p>Sorry, I Fucked Up Somewhere on the server, I'm probably fixing it, please  try again or visit after sometime.</p>
<p><a href="/">Try again!</a></p>
</div>
</div>
  `,
  styles: [
    `.wrapper {
      position: relative;
      max-width: 1298px;
      height: auto;
      margin: 2em auto 0 auto;
    }`,
    `.box {
      max-width: 70%;
      min-height: auto;
      margin: 0 auto;
      padding: 1em 1em;
      text-align: center;
      background: url("https://www.dropbox.com/s/xq0841cp3icnuqd/flame.png?raw=1") no-repeat top 10em center/128px 128px,
                  transparent url("https://www.dropbox.com/s/w7qqrcvhlx3pwnf/desktop-pc.png?raw=1") no-repeat top 13em center/128px 128px;
    }`,
    `h1, p:not(:last-of-type) { text-shadow: 0 0 6px #216f79; }

    h1 {
      margin: 0 0 1rem 0;
      font-size: 8em;
    }
    p {
      margin-bottom: 0.5em;
      font-size: 3em;
    }
    p:first-of-type { margin-top: 4em; }
    p > a {
      border-bottom: 1px dashed #216f79;
      font-style: italic;
      text-decoration: none;
      color: #216f79;
    }
    p > a:hover { text-shadow: 0 0 6px #216f79; }
    p img { vertical-align: bottom; }`
  ]
})
export class ServerErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
