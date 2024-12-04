import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts=[
    { title:'Neat Tree',
      imageUrl:'assets/tree.jpeg',
      username:'@Nature Lover',
      content:'I saw this neat tree today'
    },
    { title:'Snowy Mountain',
      imageUrl:'assets/mountain.jpeg',
      username:'@Mountain Lover',
      content:'Here is a picture of snowy monutain'
    },
    { title:'Mountain Biking ',
      imageUrl:'assets/biking.jpeg',
      username:'@Bike Lover',
      content:'I did some biking today'
    }
  ];
}
