import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'constructionWeb';
  topPanelClass = '';

  onScroll(event) {
    if (event.currentTarget.scrollTop > 100) {
      if (window.innerWidth > 600) {
        this.topPanelClass = 'scrolled awake';
      }
    } else {
      this.topPanelClass = '';
    }
  }
}
