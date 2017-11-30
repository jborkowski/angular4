import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'star',
  templateUrl: './star.component.html',
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
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Angular emulating concept of Shadow DOM in 99.9% you dont want to change it.
  
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