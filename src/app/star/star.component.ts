import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'star',
  template: `
  <span (click)="onClick()"
   class="glyphicon"
   [class.glyphicon-star]="isSelected"
   [class.glyphicon-star-empty]="!isSelected"
   ></span>
   <br/>
  `,
  styles: [
    `
    .glyphicon {
      font-size: 100px;
      color: green;
    }

    .glyphicon-star {
      background: black;
    }
    `    
  ],
  styleUrls: ['./star.component.css']
  
  //inputs: ['isFavorite'] // magic string
})
export class StarComponent {

  // <input [(ngModel)]="txt"/>
  // <br/>
  // {{ txt | title }}

  @Input('is-favorite') isSelected: boolean;
  @Output('change') change = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }

  render = (b: boolean) => (b) ? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty";

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}