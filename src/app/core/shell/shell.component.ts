import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-header>></app-header>
    <app-footer></app-footer>
  `,
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
