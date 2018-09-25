import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cm-result',
  templateUrl: './result.component.html',
  styles: []
})
export class ResultComponent implements OnInit {
  @Input() results: any=[];

  constructor() { }

  ngOnInit() {
  }

}
