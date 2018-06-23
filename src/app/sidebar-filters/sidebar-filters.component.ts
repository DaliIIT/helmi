import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/dataShare/data.service';

@Component({
  selector: 'app-sidebar-filters',
  templateUrl: './sidebar-filters.component.html',
  styleUrls: ['./sidebar-filters.component.css']
})
export class SidebarFiltersComponent implements OnInit {

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  sidebarFilterChange(gender, dep) {
    this.data.changeMessage({gender: gender.value, department: dep.value});
  }

}
