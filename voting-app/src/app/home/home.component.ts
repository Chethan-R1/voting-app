import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   showHeaderAndTiles = false;
  showStory = false;

  goHome() {
    this.showHeaderAndTiles = false;
    this.showStory = false;
  }

  showVotingTiles() {
    this.showHeaderAndTiles = true;
    this.showStory = false;
  }

  showStoryDetails() {
    this.showStory = true;
    this.showHeaderAndTiles = false;
  }
}
