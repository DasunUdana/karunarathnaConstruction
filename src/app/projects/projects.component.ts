import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  images: any = [];
  imgUrl: string;
  selectedProjectType: number;
  projects: any = [];
  localProjects: any = [];
  internationalProjects: any = [];
  onGoingProjects: any = [];
  selectedProject: any = {};

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.localProjects = [
      {
        name: 'DEHIATTAKANDIYA DENDRO POWER PROJECT',
        des: 'CONSTRUCTION OF ALL CIVIL STRUCTURES',
        client: 'VIDUL BIOMASS (PRIVATE) LIMITED',
        period: 'MARCH /2018JUNE 2019',
        location: 'DEHIATTAKANDIYA, EASTERN PROVINCE',
        capacity: '3.3MW',
        value: 'Rs. 225 Mn',
        images: ['2/p2_1.jpg', '2/p2_2.jpg', '2/p2_3.jpg', '2/p2_4.jpg', '2/p2_5.jpg', '2/p2_6.jpg'],
      },
      {
        name: 'UDAWELA MINI HYDRO POWER PROJECT',
        des: 'Construction of Access Road , Weir, Intake , De-dander and 598 meters Channel',
        client: 'UDAWELA HYDRO (PVT) LTD',
        period: 'September 2016/October2017',
        location: 'Thaldena, Badulla',
        capacity: '1.6 MW',
        value: 'Rs. 95.0 Mn (without VAT)',
        images: ['8/p8_1.jpg', '8/p8_2.jpg', '8/p8_3.jpg', '8/p8_4.jpg', '8/p8_5.jpg', '8/p8_6.jpg', '8/p8_7.jpg', '8/p8_8.jpg',
          '8/p8_9.jpg']
      },
      {
        name: 'LOWER KOTHMALE OYA MINI HYDRO POWER PROJECT',
        des: 'Construction of WEIR/INTAKE & CHANNELSTRUCTURES',
        client: 'LOWER KOTHMALE OYA HYDRO POWER (PRIVATE) LIMITED',
        period: '2012 June/2014 June',
        location: 'LOWER KOTHMALE',
        capacity: '4.5MW',
        value: 'Rs.221.6.0Mn',
        images: ['4/p4_1.jpg', '4/p4_2.jpg']
      },
      {
        name: 'GANTUNA-UDAGAMA MINI HYDRO POWER PROJECT',
        des: 'Construction of ALL CIVIL STRUCTURES',
        client: 'VIDULLANKA PLC',
        period: 'April2009/March 2010',
        location: 'ARANAYAKA',
        capacity: '1.2 MW',
        value: 'Rs.48.7Mn',
        images: ['3/p3_1.jpg']
      },
      {
        name: 'RIDEEPANA MINI HYDRO POWER PROJECT',
        des: 'Construction of Road & Bridge, Weir, Intake & Channel',
        client: 'VIDULLANKA PLC',
        period: 'FEBRUARY2014/FEBRUARY2015',
        location: 'Badulla on Badulu Oya',
        capacity: '1.7 MW',
        value: 'Rs. 126.0 Mn',
        images: []
      },
      {
        name: 'PADIYAPELELLA  MINI HYDRO POWER PROJECT',
        des: 'Construction of 2650 meters long Head Race Canal, Fore-Bay and Power House',
        client: 'PADIYAPELELLA HYDRO POWER{PVT} LTD',
        period: 'Oct 2010 to 2013',
        location: 'Padiyapelella',
        capacity: '3.5 MW',
        value: 'Rs.255.0Mn',
        images: []
      },
      {
        name: 'BADULU-OYA MINI HYDRO POWER PROJECT',
        des: 'Construction of HEADRACE CANAL & FOREBAY',
        client: 'HIGHLAND-ENERGY/ECO-POWER',
        period: '2008/2010',
        location: 'BADULLA ( BADULU OYA )',
        capacity: '6 MW',
        value: 'Rs.165.0Mn',
        images: ['1/p1_1.jpg', '1/p1_2.jpg'],
      }
    ];

    this.internationalProjects = [{
        name: 'MUVUMBE MINI HYDRO POWER PROJECT',
        des: 'Construction of Access Roads, 4 nos bridges,Weir & Intake Structure,and 1100 meters of Concrete Reinforced Headrace Canal ' +
          'for MUVUMBE HYDRO (U) LTD an associate Company of Vidullanka Plc',
        period: '16 MONTHS Commencement ; October 2015 Completed ; February 2017',
        location: 'OVERSEAS PROJECT',
        capacity: '6.5 MW RUN OFF RIVER TYPE',
        value: 'U S DOLLARS 2,951,510/17',
        images: ['5/p5_1.jpg', '5/p5_2.jpg', '5/p5_3.jpg', '5/p5_4.jpg', '5/p5_5.jpg', '5/p5_6.jpg', '5/p5_7.jpg', '5/p5_8.jpg']
      }
    ];

    this.onGoingProjects = [
      {
        name: 'BUKINDA MINI HYDRO POWER PROJECT',
        des: '--',
        client: '--',
        period: '--',
        location: 'BUKINDA, UGANDA',
        capacity: '',
        value: '',
        images: ['9/p9_1.jpg', '9/p9_2.jpg', '9/p9_3.jpg'],
      }
    ];

    this.onProjectType(1);
  }

  openBackDropCustomClass(content, imgurl) {
    this.imgUrl = imgurl;

    this.modalService.open(content, {
      backdropClass: 'dark-backdrop',
      windowClass: 'transparent-bg-modal',
      size: 'lg',
      centered: true
    });
  }

  onSelectProject(project) {
    this.selectedProject = undefined;
    this.selectedProject = project;
  }

  onProjectType(id) {
    this.selectedProjectType = id;
    this.projects = id === 1 ? this.onGoingProjects : id === 2 ? this.localProjects : this.internationalProjects;
    this.selectedProject = this.projects[0];
  }
}
