import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() PData: number;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.childEvent.emit(value);
  }

}
