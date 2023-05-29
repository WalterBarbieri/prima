import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  title = 'secondo';
  subtitle = 'brutto';
  constructor() { }

  ngOnInit(): void {
  }

}
