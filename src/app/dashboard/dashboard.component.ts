import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  today: any;

  designation: string = '';
  username: string = '';
  noOfTeamMembers: number = 0;
  totalCostOfAllProjects: number = 0;
  pendingTasks: number = 0;
  upcomingProjects: number = 0;
  projectCost: number = 0;
  currentExpenditure: number = 0;
  availableFunds: number = 0;

  clients: any = []
  projects: any = []
  years: any = []
  teamMembersSummary: any = []
  teamMembers: any = []

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.today = new Date();

    this.designation = 'Team Leader';
    this.username = 'Tom Smith';
    this.noOfTeamMembers = 57;
    this.totalCostOfAllProjects = 235;
    this.pendingTasks = 13;
    this.upcomingProjects = 4;
    this.projectCost = 2341233;
    this.currentExpenditure = 97532;
    this.availableFunds = 59876;
    this.clients = [
      'ABC Technology',
      'XYZ Infotech',
      'MNO Industries'
    ]

    this.projects = [
      'Project A',
      'Project B',
      'Project C',
      'Project D',
    ]

    for (let y = 2022; y >= 2010; y--) {
      this.years.push(y);
    }

    this.teamMembersSummary = this.service.getTeamMemberSummary();

    this.teamMembers = [
      {
        region: 'East',
        members: [
          { id: 1, name: 'Tom', status: 'Available' },
          { id: 2, name: 'Alex', status: 'Available' },
          { id: 3, name: 'Mike', status: 'Busy' },
          { id: 4, name: 'John', status: 'Busy' },
        ]
      },
      {
        region: 'West',
        members: [
          { id: 9, name: 'Harvey', status: 'Available' },
          { id: 10, name: 'Donna', status: 'Busy' },
          { id: 11, name: 'Mike', status: 'Busy' },
          { id: 12, name: 'Rachel', status: 'Available' },
        ]
      },
      {
        region: 'North',
        members: [
          { id: 9, name: 'Harvey', status: 'Available' },
          { id: 10, name: 'Donna', status: 'Busy' },
          { id: 11, name: 'Mike', status: 'Busy' },
          { id: 12, name: 'Rachel', status: 'Available' },
        ]
      },
      {
        region: 'South',
        members: [
          { id: 13, name: 'Ford', status: 'Available' },
          { id: 14, name: 'Miller', status: 'Busy' },
          { id: 15, name: 'James', status: 'Busy' },
          { id: 16, name: 'Anna', status: 'Available' },
        ]
      },
    ]


  }

  onProjectChange(event: any) {
    let projectName: string = event.target.innerHTML;
    projectName = projectName.trim();

    if (projectName == 'Project A') {
      this.projectCost = 2341233;
      this.currentExpenditure = 97532;
      this.availableFunds = 59876;
    }
    if (projectName == 'Project B') {
      this.projectCost = 2541233;
      this.currentExpenditure = 96532;
      this.availableFunds = 46876;
    }
    if (projectName == 'Project C') {
      this.projectCost = 7741233;
      this.currentExpenditure = 75532;
      this.availableFunds = 66876;
    }
    if (projectName == 'Project D') {
      this.projectCost = 3451233;
      this.currentExpenditure = 123432;
      this.availableFunds = 65876;
    }
  }

}