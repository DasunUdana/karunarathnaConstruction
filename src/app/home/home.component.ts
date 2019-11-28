import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: any = [];
  showNavigationArrows: boolean;
  showNavigationIndicators: boolean;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.images = [
      '../../assets/images/home1.jpg',
      '../../assets/images/home2.jpg',
      '../../assets/images/home4.jpg',
      '../../assets/images/home5.jpg',
      '../../assets/images/home6.jpg',
      '../../assets/images/home7.jpg',
      '../../assets/images/home8.jpg',
      '../../assets/images/home9.jpg',
      '../../assets/images/home10.jpg',
      '../../assets/images/home11.jpg',
      '../../assets/images/home12.jpg',
    ];
    this.showNavigationArrows = false;
    this.showNavigationIndicators = false;
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {
      backdropClass: 'dark-backdrop',
      windowClass: 'transparent-bg-modal',
      size: 'lg',
      centered: true
    });
  }
}
