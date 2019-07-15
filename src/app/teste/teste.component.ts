import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  template: `
    <p>
      teste works!
    </p>
  `,
  styles: [
      `
        p { color: green}
      `,
      'p {background-color: black}'
  ]
})
export class TesteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
