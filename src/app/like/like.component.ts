import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;

  constructor() {}

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += this.isActive ? 1 : -1;
  }

}