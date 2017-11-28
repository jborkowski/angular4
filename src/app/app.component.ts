import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './star/star.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed", eventArgs);
  }
}
