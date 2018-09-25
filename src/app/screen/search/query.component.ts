import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cm-query',
  template: `
  <mat-form-field>
    <input #q matInput placeholder="Search" [value]="query" (keyup)="update(q.value)" (blur)="update(q.value)" (keyup.enter)="validate()">
    <button mat-button *ngIf="query" matSuffix mat-icon-button aria-label="Search" (click)="validate()">
        <mat-icon>search</mat-icon>
      </button>
</mat-form-field>

  `,
  styles: ['']
})
export class QueryComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  @Input() query: string = '';
  update(value){
      this.query = value;
  }

  validate(){
    this.search.next(this.query);

  }

}
